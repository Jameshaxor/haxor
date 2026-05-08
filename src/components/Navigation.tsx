'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollRef = useRef(0);
  const ticking = useRef(false);

  // Hide/show nav on scroll direction — using ref to avoid re-renders
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScrollRef.current && currentScroll > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastScrollRef.current = currentScroll;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as unknown as Record<string, { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void }>).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -100 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  }, []);

  const links = [
    { id: 'work', label: 'work' },
    { id: 'about', label: 'about' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <>
      <nav className={`nav ${hidden ? 'hidden' : ''}`} id="navigation">
        <div
          className="nav__brand"
          onClick={() => {
            const lenis = (window as unknown as Record<string, { scrollTo: (target: number, options?: Record<string, unknown>) => void }>).__lenis;
            if (lenis) lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          manu.
        </div>

        <ul className="nav__links">
          {links.map((link) => (
            <li key={link.id}>
              <button
                className={`nav__link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          className={`nav__hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          onKeyDown={(e) => e.key === 'Enter' && setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div className={`nav__mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            onClick={() => scrollTo(link.id)}
            role="button"
            tabIndex={mobileOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
