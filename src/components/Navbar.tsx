import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button.tsx';

type NavbarProps = {
  name?: string;
  links?: string[];
  active?: string;
  onNavigate?: (page: string) => void;
  cta?: string;
};

export function Navbar({
  name = 'julius.njeru',
  links = ['Work', 'About', 'Contact'],
  active,
  onNavigate,
  cta = 'Get in touch',
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const go = (l: string) => {
    setOpen(false);
    onNavigate?.(l);
  };
  return (
    <div className="navbar__wrap">
      <nav className="navbar">
        <a className="navbar__wordmark" href="#" onClick={(e) => { e.preventDefault(); go('Home'); }}>
          {name}<span className="navbar__cursor">_</span>
        </a>
        <div className="navbar__links">
          {links.map((l) => (
            <a key={l} href="#"
              className={'navbar__link' + (active === l ? ' navbar__link--active' : '')}
              onClick={(e) => { e.preventDefault(); go(l); }}>
              {l}
            </a>
          ))}
          <Button size="sm" onClick={() => go('Contact')}>{cta}</Button>
        </div>
        <div className="navbar__mobile-actions">
          <Button size="sm" onClick={() => go('Contact')}>{cta}</Button>
          <button className="icon-btn navbar__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="navbar__menu">
          {links.map((l) => (
            <a key={l} href="#"
              className={'navbar__menu-link' + (active === l ? ' navbar__menu-link--active' : '')}
              onClick={(e) => { e.preventDefault(); go(l); }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
