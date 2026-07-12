import { Github, Linkedin, Mail } from 'lucide-react';
import { IconButton } from './IconButton.jsx';

export function Footer({ name = 'your.name', email = 'hello@yourname.dev', socials }) {
  const items = socials || [
    { icon: Github, label: 'GitHub', href: 'https://github.com/njeruthuo' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:' + email },
  ];
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__kicker">Next project?</div>
        <a className="footer__cta" href={'mailto:' + email}>{email}</a>
        <div className="footer__meta">
          <span className="footer__copyright">© {new Date().getFullYear()} {name} — built from scratch</span>
          <div className="socials">
            {items.map((s) => <IconButton key={s.label} inverse icon={s.icon} label={s.label} href={s.href} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}
