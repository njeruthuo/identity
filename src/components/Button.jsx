export function Button({ variant = 'primary', size = 'md', icon: IconBefore, iconAfter: IconAfter, href, children, ...rest }) {
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
