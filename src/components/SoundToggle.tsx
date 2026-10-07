import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const playClickSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Audio Context fallback silent
  }
};

export const SoundToggle: React.FC = () => {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    const nextState = !muted;
    setMuted(nextState);
    if (!nextState) playClickSound();
  };

  return (
    <button
      onClick={toggleSound}
      className={`neo-badge text-xs transition-transform hover:scale-105 active:scale-95 ${
        muted ? 'bg-neo-paper text-neo-subtle' : 'bg-neo-green text-[#121212]'
      }`}
      title={muted ? 'Enable Audio SFX' : 'Disable Audio SFX'}
    >
      {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse" />}
      <span>{muted ? 'SFX OFF' : 'SFX ON'}</span>
    </button>
  );
};
