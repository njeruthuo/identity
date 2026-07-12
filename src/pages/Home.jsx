import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/Button.jsx';
import { IconButton } from '../components/IconButton.jsx';
import { Tag } from '../components/Tag.jsx';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { ProjectCard } from '../components/ProjectCard.jsx';
import { CodeBlock } from '../components/CodeBlock.jsx';

const heroCode = 'const engineer = {\n  focus: "frontend",\n  stack: ["react", "django",\n    "fastapi", "postgres"],\n  ships: true,\n};';

const projects = [
  { title: 'Bluetrax', blurb: 'Fleet tracking system — live vehicle telemetry, geofencing and trip history for fleet operators.', tags: ['React', 'Django', 'PostgreSQL'], imageLabel: 'dashboard shot' },
  { title: 'TMS', blurb: 'Logistics operations management — dispatch, orders and fleet workflows in one console.', tags: ['React', 'FastAPI', 'Redis'], imageLabel: 'app shot' },
  { title: 'Kollatix', blurb: 'Risk assessment engine for commercial lenders managing tracked assets.', tags: ['TypeScript', 'Django', 'MySQL'], imageLabel: 'product shot' },
  { title: 'Rhinocharge Leaderboard', blurb: 'Live rally leaderboard for the Rhino Charge — raising funds to protect endangered species in Kenya.', tags: ['React', 'Tailwind', 'Docker'], imageLabel: 'leaderboard shot' },
];

const stack = ['React', 'React Native', 'TypeScript', 'Django', 'FastAPI', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Redis', 'Docker'];

export function Home({ onNavigate }) {
  return (
    <main className="container">
      <section className="hero">
        <div className="stack-col">
          <span className="hero__kicker">{'// full-stack engineer, frontend-first'}</span>
          <h1 className="hero__title">
            I build fast, obsessively polished web apps<span className="hero__accent">.</span>
          </h1>
          <p className="hero__lede">
            From the database schema to the last hover state — I own the whole stack, and the interface is where I sweat the details.
          </p>
          <div className="row">
            <Button size="lg" iconAfter={ArrowRight} onClick={() => onNavigate?.('Work')}>View my work</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate?.('Contact')}>Get in touch</Button>
          </div>
          <div className="socials">
            <IconButton icon={Github} label="GitHub" href="https://github.com/njeruthuo" />
            <IconButton icon={Linkedin} label="LinkedIn" href="#" />
            <IconButton icon={Mail} label="Email" href="mailto:juliusn411@gmail.com" />
          </div>
        </div>
        <CodeBlock filename="about-me.ts" code={heroCode} />
      </section>

      <section className="section">
        <SectionLabel index="01">Selected work</SectionLabel>
        <div className="work-grid">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </section>

      <section className="section">
        <SectionLabel index="02">Stack</SectionLabel>
        <div className="tag-cloud">
          {stack.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </section>
    </main>
  );
}
