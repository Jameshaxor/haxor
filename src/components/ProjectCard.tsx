'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProjectCardProps {
  name: string;
  url: string;
  domain: string;
  description: string;
  year: string;
  tags: string[];
  image: string;
}

export default function ProjectCard({ name, url, domain, description, year, tags, image }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div className={`project-card reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-card__browser">
        <div className="project-card__chrome">
          <div className="project-card__dots">
            <div className="project-card__dot project-card__dot--red" />
            <div className="project-card__dot project-card__dot--yellow" />
            <div className="project-card__dot project-card__dot--green" />
          </div>
          <div className="project-card__url">{domain}</div>
        </div>

        <div className="project-card__image-wrap">
          <Image
            src={image}
            alt={`${name} — Live Preview`}
            width={1536}
            height={730}
            quality={90}
            className="project-card__image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </a>

      <div className="project-card__info">
        <div className="project-card__header">
          <h3 className="project-card__name">{name}</h3>
          <span className="project-card__year">{year}</span>
        </div>

        <p className="project-card__desc">{description}</p>

        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer" className="project-card__link">
          View Live →
        </a>
      </div>
    </div>
  );
}
