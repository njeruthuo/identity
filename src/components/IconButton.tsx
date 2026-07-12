import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

type IconButtonProps = {
  icon: ComponentType<LucideProps>;
  label: string;
  href?: string;
  inverse?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, 'icon'>;

export function IconButton({ icon: Icon, label, href, inverse, ...rest }: IconButtonProps) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      className={'icon-btn' + (inverse ? ' icon-btn--inverse' : '')}
      href={href}
      aria-label={label}
      title={label}
      {...rest}
    >
      <Icon size={18} />
    </Tag>
  );
}
