export function Tag({ tone, children }) {
  return <span className={'tag' + (tone ? ' tag--' + tone : '')}>{children}</span>;
}
