/**
 * Web Audio API Synthesis Engine inspired by Claudiu Angheloni (claudiuangheloni.com)
 * Synthesizes crisp futuristic UI hover and click sound effects live without external MP3 dependencies.
 */

const AudioContextClass = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null;
const AUDIO_SESSION_MUTED_KEY = "hp-sound-muted";

let context = null;
let fxBus = null;
let fxMaster = null;
let noiseBuffer = null;
let hoverCooldownUntil = 0;
let primed = false;
let isMuted = false;

// Read muted state from session storage
try {
  if (typeof window !== 'undefined') {
    isMuted = window.sessionStorage.getItem(AUDIO_SESSION_MUTED_KEY) === "true";
  }
} catch (e) {
  isMuted = false;
}

function ensureFxContext() {
  if (context || !AudioContextClass) return;

  try {
    context = new AudioContextClass();
    fxMaster = context.createGain();
    fxBus = context.createGain();

    fxMaster.gain.value = 0.54;
    fxBus.gain.value = 0.62;

    fxBus.connect(fxMaster);
    fxMaster.connect(context.destination);

    noiseBuffer = createNoiseBuffer();
  } catch (e) {
    console.warn("Web Audio Context initialization failed:", e);
  }
}

function now() {
  return context ? context.currentTime : 0;
}

function createNoiseBuffer() {
  if (!context) return null;
  const length = context.sampleRate * 2;
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * 0.18;
  }

  return buffer;
}

export function primeAudio() {
  ensureFxContext();
  if (primed || !context) return;
  primed = true;

  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }
}

function playTone(options) {
  if (isMuted) return;
  ensureFxContext();
  if (!context || !fxBus) return;

  const {
    frequency = 440,
    type = "sine",
    duration = 0.12,
    volume = 0.02,
    attack = 0.004,
    release = 0.08,
    detune = 0
  } = options;

  try {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = now();
    const stopAt = startAt + duration;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startAt);
    oscillator.detune.setValueAtTime(detune, startAt);

    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(Math.max(volume, 0.0002), startAt + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, stopAt + release);

    oscillator.connect(gain);
    gain.connect(fxBus);
    oscillator.start(startAt);
    oscillator.stop(stopAt + release + 0.02);
  } catch (e) {}
}

function playNoiseBurst(options) {
  if (isMuted) return;
  ensureFxContext();
  if (!context || !noiseBuffer || !fxBus) return;

  const {
    duration = 0.08,
    volume = 0.012
  } = options;

  try {
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const startAt = now();
    const stopAt = startAt + duration;

    source.buffer = noiseBuffer;
    source.loop = true;

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(2200, startAt);
    filter.Q.setValueAtTime(1.2, startAt);

    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(Math.max(volume, 0.0002), startAt + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, stopAt);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(fxBus);

    source.start(startAt);
    source.stop(stopAt + 0.02);
  } catch (e) {}
}

/**
 * High-tech UI Hover Sound Effect (from claudiuangheloni.com)
 */
export function playHoverSound() {
  if (isMuted) return;
  const currentMillis = performance.now();
  if (currentMillis < hoverCooldownUntil) return;
  hoverCooldownUntil = currentMillis + 60;

  playTone({
    frequency: 7040,
    type: "square",
    duration: 0.008,
    volume: 0.05,
    attack: 0.0005,
    release: 0.008
  });

  playTone({
    frequency: 9880,
    type: "sine",
    duration: 0.006,
    volume: 0.034,
    attack: 0.0005,
    release: 0.007,
    detune: 22
  });

  playTone({
    frequency: 12160,
    type: "sine",
    duration: 0.004,
    volume: 0.022,
    attack: 0.0005,
    release: 0.006,
    detune: 14
  });

  playNoiseBurst({
    duration: 0.006,
    volume: 0.008
  });
}

/**
 * Tactical UI Click Sound Effect (from claudiuangheloni.com)
 */
export function playClickSound() {
  if (isMuted) return;
  playTone({
    frequency: 4680,
    type: "triangle",
    duration: 0.012,
    volume: 0.04,
    attack: 0.0007,
    release: 0.01
  });

  playTone({
    frequency: 9280,
    type: "square",
    duration: 0.009,
    volume: 0.03,
    attack: 0.0005,
    release: 0.009
  });

  playTone({
    frequency: 13240,
    type: "sine",
    duration: 0.006,
    volume: 0.024,
    attack: 0.0005,
    release: 0.006,
    detune: 24
  });

  playNoiseBurst({
    duration: 0.006,
    volume: 0.01
  });
}

export function toggleAudioMute() {
  isMuted = !isMuted;
  try {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(AUDIO_SESSION_MUTED_KEY, isMuted ? "true" : "false");
    }
  } catch (e) {}
  if (!isMuted) {
    primeAudio();
    playClickSound();
  }
  return isMuted;
}

export function getAudioMutedState() {
  return isMuted;
}

/**
 * Bind global interaction listeners for hover & click audio feedback across the entire site
 */
export function initGlobalAudioListeners() {
  if (typeof window === 'undefined') return;

  const unlock = () => {
    primeAudio();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
    window.removeEventListener('touchstart', unlock);
  };

  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });
  window.addEventListener('touchstart', unlock, { once: true });

  const handlePointerOver = (e) => {
    const target = e.target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
    if (target) {
      primeAudio();
      playHoverSound();
    }
  };

  const handleClick = (e) => {
    const target = e.target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
    if (target) {
      primeAudio();
      playClickSound();
    }
  };

  document.addEventListener('pointerover', handlePointerOver, { passive: true });
  document.addEventListener('click', handleClick, { passive: true });
}
