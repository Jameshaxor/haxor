'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const techStack = [
  { name: 'React', d: 'M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z M2 12c0-2.2 4.5-4 10-4s10 1.8 10 4-4.5 4-10 4S2 14.2 2 12Z' },
  { name: 'Next.js', d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M8 8l8.5 10.5 M16 8v8' },
  { name: 'TypeScript', d: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z M8 11h6 M11 11v6' },
  { name: 'JavaScript', d: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z M12 11v6 M15 14c0-1 1-2 2-1s-1 4-2 3' },
  { name: 'GSAP', d: 'M4 12s4-8 8-8 8 8 8 8-4 8-8 8-8-8-8-8Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z' },
  { name: 'Framer', d: 'M5 2h14v7H12l7 7H12v7l-7-7V9l7-7H5Z' },
  { name: 'HTML', d: 'M4 3l1.5 16L12 21l6.5-2L20 3H4Z M8 7h8l-.5 6-3.5 1-3.5-1-.2-2' },
  { name: 'CSS', d: 'M4 3l1.5 16L12 21l6.5-2L20 3H4Z M16 7H8l.3 3h7.2l-.5 5-3 1-3-1-.2-2' },
  { name: 'Tailwind', d: 'M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.7.2 1.3.7 1.8 1.3.9 1 2 2.2 4.2 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.7-.2-1.3-.7-1.8-1.3C15.3 7.2 14.2 6 12 6Z M7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.7.2 1.3.7 1.8 1.3.9 1 2 2.2 4.2 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.7-.2-1.3-.7-1.8-1.3-.9-1-2-2.2-4.2-2.2Z' },
  { name: 'Node.js', d: 'M12 3l9 5v8l-9 5-9-5V8l9-5Z M12 12l9-4 M12 12l-9-4 M12 12v9' },
  { name: 'Figma', d: 'M8 6a2 2 0 0 1 2-2h4a2 2 0 0 1 0 4h-4a2 2 0 0 1-2-2Z M8 12a2 2 0 0 1 2-2h2v4h-2a2 2 0 0 1-2-2Z M14 12a2 2 0 1 1 0 0Z M8 18a2 2 0 0 1 2-2h2v2a2 2 0 0 1-4 0Z' },
  { name: 'Git', d: 'M7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M17 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z M7 9v6 M9 7h6' },
];

export default function About() {
  const { ref: labelRef, isVisible: labelVisible } = useScrollReveal(0.2);
  const { ref: textRef, isVisible: textVisible } = useScrollReveal(0.15);
  const { ref: stackRef, isVisible: stackVisible } = useScrollReveal(0.1);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className={`section-label reveal ${labelVisible ? 'visible' : ''}`} ref={labelRef}>
          <span className="section-label__number">02</span>
          <span className="section-label__title">About</span>
          <div className="section-label__line" />
        </div>

        <div className="about__content">
          <div className={`about__text-block reveal ${textVisible ? 'visible' : ''}`} ref={textRef}>
            <h2>
              I don&apos;t build websites.<br />
              I build experiences<br />
              people <span className="accent">remember.</span>
            </h2>
            <p>
              Every project starts with a question: how should this <em>feel</em>?
              Not just how it looks — how it moves, how it responds, how it makes
              someone pause mid-scroll. I obsess over the details that most people
              never notice, because those are the details that separate good from
              unforgettable.
            </p>
          </div>

          <div className={`about__stack reveal ${stackVisible ? 'visible' : ''}`} ref={stackRef} style={{ transitionDelay: '150ms' }}>
            {techStack.map((tech) => (
              <div key={tech.name} className="about__stack-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={tech.d} />
                </svg>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
