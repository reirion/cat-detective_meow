function samePair(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length !== 2 || right.length !== 2) return false;
  const sortedLeft = [...left].sort();
  const sortedRight = [...right].sort();
  return sortedLeft.every((id, index) => id === sortedRight[index]);
}

// Episode configuration shape: { id, clueIds: [idA, idB], resultClueId, successMessage? }.
// Adds a configured result clue to the existing episode progress without touching investigation turns.
export function combineClues(episode, progress, selectedIds) {
  if (!Array.isArray(selectedIds) || selectedIds.length !== 2 || selectedIds[0] === selectedIds[1] ||
      !selectedIds.every(id => progress.found.includes(id))) {
    return { status: 'invalid' };
  }

  const combination = (episode.combinations || []).find(item => samePair(item.clueIds, selectedIds));
  if (!combination) return { status: 'miss' };

  progress.combinedCombinations ||= [];
  if (progress.combinedCombinations.includes(combination.id) || progress.found.includes(combination.resultClueId)) {
    return { status: 'duplicate', combination };
  }

  const resultClue = episode.clues.find(item => item.id === combination.resultClueId);
  if (!resultClue) return { status: 'invalid-result', combination };

  progress.found.push(resultClue.id);
  progress.combinedCombinations.push(combination.id);
  return { status: 'success', combination, resultClue };
}
