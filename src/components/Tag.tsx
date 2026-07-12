import type { ReactNode } from 'react';

type TagProps = {
  tone?: 'positive';
  children: ReactNode;
};

export function Tag({ tone, children }: TagProps) {
  return <span className={'tag' + (tone ? ' tag--' + tone : '')}>{children}</span>;
}
