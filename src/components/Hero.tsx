'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wait for preloader to finish its 1.8s + slide up
    const delay = 2200;

    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // Cursor spotlight
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!spotlightRef.current || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(800px circle at ${x}px ${y}px, rgba(200, 255, 0, 0.04), transparent 60%)`;
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      className="hero section"
      id="hero"
      ref={heroRef}
      onMouseEnter={() => spotlightRef.current?.classList.add('active')}
      onMouseLeave={() => spotlightRef.current?.classList.remove('active')}
    >
      <div className="hero__spotlight" ref={spotlightRef} />

      <div className="container">
        <div className="hero__content">
          <h1 className="hero__headline">
            <span className={`line-reveal ${visible ? 'visible' : ''}`}>
              <span className="line-reveal__inner">I make the</span>
            </span>
            <span className={`line-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '120ms' }}>
              <span className="line-reveal__inner" style={{ transitionDelay: '120ms' }}>internet look</span>
            </span>
            <span className={`line-reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '240ms' }}>
              <span className="line-reveal__inner" style={{ transitionDelay: '240ms' }}><span className="accent">expensive.</span></span>
            </span>
          </h1>

          <p className={`hero__sub reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
            <span className="accent">Manu Kumar Nayak</span> — turning caffeine into pixel-perfect,
            scroll-stopping web experiences that nobody mistakes for a template.
          </p>
        </div>
      </div>

      <div className={`hero__scroll-indicator reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '700ms' }}>
        <span>scroll</span>
        <div className="hero__scroll-indicator__arrow" />
      </div>
    </section>
  );
}
