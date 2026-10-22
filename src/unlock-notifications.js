function locationFor(episode, item, kind) {
  if (item.locationText) return item.locationText;
  if (kind === 'testimony') {
    const person = episode.suspects?.find(suspect => suspect.id === item.suspectId)?.name || item.suspectName || '인물';
    return `용의자 조사 → ${person} → 새로운 증언 → ${item.name}`;
  }
  if (kind === 'target') return `용의자 조사 → ${item.name}`;
  if (item.phase === 1 && item.kind === 'document') return `현장 조사 → 기록 보관함 → ${item.name}`;
  if (item.phase === 1) return `현장 조사 → ${episode.scene?.label || '현장'} → 현장 단서 → ${item.name}`;
  const person = episode.suspects?.find(suspect => suspect.id === item.suspectId)?.name || '인물';
  return `용의자 조사 → ${person} → 조사 단서 → ${item.name}`;
}

function unlockedState(item, progress, canUnlock) {
  if (progress.found.includes(item.id)) return 'found';
  if (item.combinationOnly) return 'locked';
  if (item.requires && !canUnlock(item.requires)) return 'locked';
  if (item.hiddenUntilPassword && !progress.unlocked.includes(item.id)) return 'locked';
  if (item.passwordRequired && !progress.unlocked.includes(item.id)) return 'password';
  return 'available';
}

export function captureUnlockStates(episode, progress, canUnlock) {
  const states = new Map();
  for (const item of episode.clues || []) {
    const state = unlockedState(item, progress, canUnlock);
    const category = state === 'password' ? 'passwordUnlocked' : 'clueUnlocked';
    states.set(`clue:${item.id}`, {
      key: `clue:${item.id}`, id: item.id, name: item.name, kind: 'clue', state, category,
      conditional: Boolean(item.requires),
      locationText: locationFor(episode, item, 'clue')
    });
  }

  for (const suspect of episode.suspects || []) {
    if (!suspect.requires) continue;
    const state = canUnlock(suspect.requires) ? 'available' : 'locked';
    states.set(`target:${suspect.id}`, {
      key: `target:${suspect.id}`, id: suspect.id, name: suspect.name, kind: 'target', state,
      conditional: true,
      category: 'clueUnlocked', locationText: locationFor(episode, { ...suspect, locationText: suspect.locationText }, 'target')
    });
  }

  for (const witness of episode.witnesses || []) {
    for (const testimony of witness.additionalTestimonies || witness.testimonies || []) {
      if (!testimony.requires) continue;
      const state = canUnlock(testimony.requires) ? 'available' : 'locked';
      const item = { ...testimony, suspectId: testimony.suspectId || witness.id, locationText: testimony.locationText };
      states.set(`testimony:${testimony.id}`, {
        key: `testimony:${testimony.id}`, id: testimony.id, name: testimony.name || '새로운 증언', kind: 'testimony', state,
        conditional: true,
        category: 'testimonyUnlocked', locationText: locationFor(episode, item, 'testimony')
      });
    }
  }
  return states;
}

export function currentlyUnlockedUnacknowledged(states, acknowledged = []) {
  const seen = new Set(acknowledged);
  return [...states.values()].filter(item => item.conditional &&
    ['available', 'password'].includes(item.state) && !seen.has(item.key));
}

export function newlyUnlocked(before, after, alreadyNotified = []) {
  const notified = new Set(alreadyNotified);
  const result = [];
  for (const [key, next] of after) {
    const previous = before.get(key);
    const unlockedNow = previous?.state === 'locked' && ['password', 'available', 'found'].includes(next.state);
    if (unlockedNow && !notified.has(key)) result.push(next);
  }
  return result;
}
