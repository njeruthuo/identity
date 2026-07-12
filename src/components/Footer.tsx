import { IconButton } from "./IconButton.tsx";
import items from "../data.ts";
import { FooterProps } from "../types.ts";

export function Footer({
  name = "your.name",
  email = "hello@yourname.dev",
}: FooterProps) {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__kicker">Next project?</div>
        <a target="_blank" className="footer__cta" href={"mailto:" + email}>
          {email}
        </a>
        <div className="footer__meta">
          <span className="footer__copyright">
            © {new Date().getFullYear()} {name} — built from scratch
          </span>
          <div className="socials">
            {items.map((s) => (
              <IconButton
                key={s.label}
                inverse
                icon={s.icon}
                label={s.label}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
