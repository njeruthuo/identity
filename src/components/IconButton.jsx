export function IconButton({ icon: Icon, label, href, inverse, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={'icon-btn' + (inverse ? ' icon-btn--inverse' : '')} href={href} aria-label={label} title={label} {...rest}>
      <Icon size={18} />
    </Tag>
  );
}
