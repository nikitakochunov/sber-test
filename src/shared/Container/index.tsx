import type { PropsWithChildren } from 'react';

import { containerStyles } from './styles';

export const Contaner = ({ children }: PropsWithChildren) => (
    <div className={containerStyles}>{children}</div>
);
