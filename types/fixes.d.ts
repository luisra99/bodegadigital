import { FC } from 'react';

declare namespace React {
  type StatelessComponent<P> = FC<P>;
}
