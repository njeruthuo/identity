import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentType, ReactNode } from 'react';
import type { LucideProps } from 'lucide-react';

type IconType = ComponentType<LucideProps>;

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  iconAfter?: IconType;
  href?: string;
  children?: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

export function Button({
  variant = 'primary',
  size = 'md',
  icon: IconBefore,
  iconAfter: IconAfter,
  href,
  children,
  ...rest
}: ButtonProps) {
  const Tag = href ? 'a' : 'button';
  const cls = 'btn btn--' + variant + ' btn--' + size;
  const iconSize = size === 'sm' ? 15 : size === 'lg' ? 19 : 17;
  return (
    <Tag className={cls} href={href} {...rest}>
      {IconBefore && <IconBefore size={iconSize} />}
      {children}
      {IconAfter && <IconAfter size={iconSize} />}
    </Tag>
  );
}
