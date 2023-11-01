import type { PropsWithChildren } from 'react';
import { css } from '@emotion/css';

export const Contaner = ({ children }: PropsWithChildren) => (
    <div
        className={css`
            max-width: 968px;
            padding: 0 28px;
            margin: 0 auto;
        `}
    >
        {children}
    </div>
);
