import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { Input, Textarea } from '../components/Input.jsx';
import { Button } from '../components/Button.jsx';
import { IconButton } from '../components/IconButton.jsx';
import { Tag } from '../components/Tag.jsx';

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <main className="container">
      <div className="contact">
        <div className="stack-col">
          <SectionLabel index="04">Contact</SectionLabel>
          <h1 className="contact__title">Let's build something.</h1>
          <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', color: 'var(--ink-2)', maxWidth: 420 }}>
            I reply within a day. Tell me what you're shipping and where the frontend hurts.
          </p>
          <div className="socials">
            <IconButton icon={Github} label="GitHub" href="https://github.com/njeruthuo" />
            <IconButton icon={Linkedin} label="LinkedIn" href="#" />
            <IconButton icon={Mail} label="Email" href="mailto:juliusn411@gmail.com" />
          </div>
          <div><Tag tone="positive">Currently available</Tag></div>
        </div>
        <form className="contact__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="contact__form-row">
            <Input label="Name" placeholder="Ada Lovelace" />
            <Input label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Textarea label="Message" placeholder="What are you building?" />
          {sent ? (
            <div className="contact__sent">Message sent — talk soon.</div>
          ) : (
            <Button iconAfter={ArrowRight} style={{ alignSelf: 'flex-start' }}>Send message</Button>
          )}
        </form>
      </div>
    </main>
  );
}
