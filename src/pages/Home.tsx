import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button.tsx";
import { Tag } from "../components/Tag.tsx";
import { SectionLabel } from "../components/SectionLabel.tsx";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { CodeBlock } from "../components/CodeBlock.tsx";
import ContactsList from "../components/ContactsList.tsx";
import { HomeProps } from "../types.ts";
import { heroCode, projects, stack } from "../data.ts";

export function Home({ onNavigate }: HomeProps) {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="container">
      <section className="hero">
        <div className="stack-col">
          <span className="hero__kicker">
            {"// full-stack engineer, frontend-first"}
          </span>
          <h1 className="hero__title">
            I build fast, obsessively polished web apps
            <span className="hero__accent">.</span>
          </h1>
          <p className="hero__lede">
            From the database schema to the last hover state — I own the whole
            stack, and the interface is where I sweat the details.
          </p>
          <div className="row">
            <Button
              size="lg"
              iconAfter={ArrowRight}
              onClick={() => onNavigate?.("Work")}
            >
              View my work
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleScrollToContact}
            >
              Get in touch
            </Button>
          </div>
          <ContactsList />
        </div>
        <CodeBlock filename="about-me.ts" code={heroCode} />
      </section>

      <section className="section">
        <SectionLabel index="01">Selected work</SectionLabel>
        <div id="project-section" className="work-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionLabel index="02">Stack</SectionLabel>
        <div className="tag-cloud">
          {stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>
    </main>
  );
}
