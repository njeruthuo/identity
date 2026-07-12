import { ArrowUpRight } from 'lucide-react';
import { Tag } from './Tag.jsx';

export function ProjectCard({ title, blurb, tags = [], image, imageLabel = 'project shot', href = '#' }) {
  return (
    <a className="project-card" href={href}>
      <div className="project-card__media" style={image ? { backgroundImage: 'url(' + image + ')' } : undefined}>
        {!image && <span className="project-card__media-label">{imageLabel}</span>}
      </div>
      <div className="project-card__body">
        <div className="project-card__title-row">
          <span className="project-card__title">{title}</span>
          <span className="project-card__arrow"><ArrowUpRight size={20} /></span>
        </div>
        {blurb && <span className="project-card__blurb">{blurb}</span>}
        {tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        )}
      </div>
    </a>
  );
}
