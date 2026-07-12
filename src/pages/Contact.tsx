import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel.tsx";
import { Input, Textarea } from "../components/Input.tsx";
import { Button } from "../components/Button.tsx";
import { Tag } from "../components/Tag.tsx";
import ContactsList from "../components/ContactsList.tsx";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="container">
      <div className="contact">
        <div className="stack-col">
          <SectionLabel index="04">Contact</SectionLabel>
          <h1 className="contact__title">Let's build something.</h1>
          <p
            style={{
              margin: 0,
              fontSize: "var(--text-body-lg)",
              color: "var(--ink-2)",
              maxWidth: 420,
            }}
          >
            I reply within a day. Tell me what you're shipping and where the
            frontend hurts.
          </p>
          <ContactsList />
          <div>
            <Tag tone="positive">Currently available</Tag>
          </div>
        </div>
        <form
          className="contact__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="contact__form-row">
            <Input label="Name" placeholder="E.g Your Name" />
            <Input
              label="Email"
              type="email"
              placeholder="E.g you@example.com"
            />
          </div>
          <Textarea label="Message" placeholder="What are you building?" />
          {sent ? (
            <div className="contact__sent">Message sent — talk soon.</div>
          ) : (
            <Button iconAfter={ArrowRight} style={{ alignSelf: "flex-start" }}>
              Send message
            </Button>
          )}
        </form>
      </div>
    </main>
  );
}
