'use client';

import { useEffect, useState, useRef } from 'react';

const words = ['Hello', 'Bonjour', 'Ciao', 'Olá', 'やあ', 'Hallo', 'नमस्ते'];

export default function Preloader() {
  const [currentWord, setCurrentWord] = useState(0);
  const [phase, setPhase] = useState<'cycling' | 'exit' | 'done'>('cycling');
  const [shouldShow, setShouldShow] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Cycle through words quickly like Dennis's site
    intervalRef.current = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 180);

    // After 1.8s of cycling, start exit
    const exitTimer = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPhase('exit');
    }, 1800);

    // After exit animation completes (~0.8s), remove
    const doneTimer = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 2600);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!shouldShow || phase === 'done') return null;

  return (
    <div className={`preloader ${phase === 'exit' ? 'exit' : ''}`}>
      <div className="preloader__word-wrap">
        <span className="preloader__dot" />
        <span className="preloader__word" key={currentWord}>
          {words[currentWord]}
        </span>
      </div>

      {/* Curved bottom edge SVG */}
      <svg className="preloader__curve" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="var(--void)" />
      </svg>
    </div>
  );
}
