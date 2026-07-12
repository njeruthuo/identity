import { Mail, FileText } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { Tag } from '../components/Tag.jsx';
import { Button } from '../components/Button.jsx';

const stats = [
  ['5+', 'years shipping'],
  ['30+', 'projects delivered'],
  ['60%', 'fastest perf win'],
];

export function About({ onNavigate }) {
  return (
    <main className="container">
      <div className="about">
        <div className="stack-col" style={{ gap: 'var(--space-4)' }}>
          <img className="about__portrait" src="/portrait.jpeg" alt="Portrait" />
          <div className="project-card__tags">
            <Tag tone="positive">Open to work</Tag>
            <Tag>Nairobi, Kenya · remote</Tag>
          </div>
        </div>
        <div className="stack-col">
          <SectionLabel index="03">About</SectionLabel>
          <h1 className="about__title">Full-stack range, frontend conviction.</h1>
          <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', maxWidth: 560 }}>
            I've spent the last five years building products end to end — APIs, data models, deploys — but the frontend is where I do my best work. I care about the 200ms between click and paint.
          </p>
          <p style={{ margin: 0, color: 'var(--ink-2)', maxWidth: 560 }}>
            Recently: led the interface rebuild for a fintech dashboard (60% faster loads), shipped a CRDT-synced notes app solo, and maintain a small open-source component library.
          </p>
          <div className="stats">
            {stats.map(([n, l]) => (
              <div className="stat" key={l}>
                <span className="stat__number">{n}</span>
                <span className="stat__label">{l}</span>
              </div>
            ))}
          </div>
          <div className="row">
            <Button icon={Mail} onClick={() => onNavigate?.('Contact')}>Get in touch</Button>
            <Button variant="secondary" icon={FileText}>Download CV</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
