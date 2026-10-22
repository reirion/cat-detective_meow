let bgm = null;
let fadeTimer = null;
let playlistKey = '';
let playlistToken = 0;

const SOUND_FILES = {
  lock: 'assets/audio/sfx_lock.mp3',
  turn: 'assets/audio/sfx_turn.mp3',
  click: 'assets/audio/sfx_click.mp3',
  gift: 'assets/audio/sfx_gift.mp3'
};
const STATE_TRACK = {
  home: 'main', episodes: 'main', letter: 'investigation', investigate: 'investigation',
  suspects: 'investigation', deduction: 'deduction', result: 'ending', truth: 'truth', thanks: 'ending'
};

export function playEffect(name, settings) {
  if (!settings?.sfx || !SOUND_FILES[name]) return;
  try {
    const audio = new Audio(SOUND_FILES[name]);
    audio.volume = Math.max(0, Math.min(1, settings.sfxVolume / 100));
    audio.play().catch(() => {});
  } catch {}
}

export function setMusic(episode, screen, settings) {
  const selection = screen === 'home'
    ? 'assets/audio/sfx_main_bgm.mp3'
    : episode?.sound?.bgm?.[screen] ?? episode?.sound?.bgm?.[STATE_TRACK[screen]] ?? null;
  const tracks = (Array.isArray(selection) ? selection : selection ? [selection] : []).filter(Boolean);
  if (!settings?.music || !tracks.length) {
    playlistToken++;
    playlistKey = '';
    fadeOut();
    return;
  }

  const target = Math.max(0, Math.min(1, settings.musicVolume / 100));
  const key = JSON.stringify(tracks);
  if (playlistKey === key && bgm && !bgm.paused) {
    clearInterval(fadeTimer);
    bgm.volume = target;
    return;
  }

  playlistToken++;
  const token = playlistToken;
  playlistKey = key;
  fadeOut(() => playTrack(tracks, 0, target, token));
}

function playTrack(tracks, index, target, token) {
  if (token !== playlistToken) return;
  try {
    const next = new Audio(tracks[index]);
    next.loop = tracks.length === 1;
    next.volume = 0;
    next.onended = () => {
      if (token === playlistToken && tracks.length > 1) {
        playTrack(tracks, (index + 1) % tracks.length, target, token);
      }
    };
    next.play().then(() => {
      if (token !== playlistToken) {
        next.pause();
        return;
      }
      bgm = next;
      let step = 0;
      clearInterval(fadeTimer);
      fadeTimer = setInterval(() => {
        step++;
        if (bgm !== next) return clearInterval(fadeTimer);
        next.volume = Math.min(target, step / 20 * target);
        if (step >= 20) clearInterval(fadeTimer);
      }, 45);
    }).catch(() => {
      if (token === playlistToken && tracks.length > 1) {
        playTrack(tracks, (index + 1) % tracks.length, target, token);
      }
    });
  } catch {
    if (token === playlistToken && tracks.length > 1) {
      playTrack(tracks, (index + 1) % tracks.length, target, token);
    }
  }
}

function fadeOut(done) {
  clearInterval(fadeTimer);
  if (!bgm) {
    done?.();
    return;
  }
  const old = bgm;
  let step = 0;
  fadeTimer = setInterval(() => {
    step++;
    old.volume = Math.max(0, old.volume - 0.06);
    if (step >= 17 || old.volume === 0) {
      clearInterval(fadeTimer);
      old.pause();
      old.onended = null;
      if (bgm === old) bgm = null;
      done?.();
    }
  }, 35);
}
