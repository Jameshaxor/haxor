'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'Fida Dance Academy',
    url: 'https://fidadance.netlify.app',
    domain: 'fidadance.netlify.app',
    image: '/project-fida.png',
    description: 'A dark luxury scroll-driven experience for Ranchi\'s premier dance academy. Cinematic storytelling with atmospheric design that makes you feel the rhythm.',
    year: '2026',
    tags: ['Next.js', 'GSAP', 'Framer Motion', 'Dark Luxury'],
  },
  {
    name: 'Lumière by Niyati',
    url: 'https://lumiereniyati.vercel.app',
    domain: 'lumiereniyati.vercel.app',
    image: '/project-lumiere.png',
    description: 'A gold-on-black editorial jewelry platform. Scroll-driven collection showcase with curated typography and cinematic product reveals.',
    year: '2026',
    tags: ['Next.js', 'Scroll Storytelling', 'Editorial Design', 'CSS'],
  },
  {
    name: 'Greeka Cafe',
    url: 'https://greekares.vercel.app',
    domain: 'greekares.vercel.app',
    image: '/project-greeka.png',
    description: 'A cinematic rooftop cafe experience with atmospheric design, reservations, and food photography. Built to convert visitors into guests.',
    year: '2026',
    tags: ['Next.js', 'Cinematic UI', 'Reservation System', 'Responsive'],
  },
];

export default function Projects() {
  const { ref: labelRef, isVisible: labelVisible } = useScrollReveal(0.2);

  return (
    <section className="projects section" id="work">
      <div className="container">
        <div className={`section-label reveal ${labelVisible ? 'visible' : ''}`} ref={labelRef}>
          <span className="section-label__number">01</span>
          <span className="section-label__title">Selected Work</span>
          <div className="section-label__line" />
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
