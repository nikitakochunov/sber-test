import { css } from '@emotion/css';

import type { TStackProps } from './types';

export const Stack = ({
    children,
    direction = 'row',
    wrap = 'wrap',
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    gap = 0,
    className
}: TStackProps) => (
    <div
        className={css`
            display: flex;
            flex-direction: ${direction};
            flex-wrap: ${wrap};
            align-items: ${alignItems};
            justify-content: ${justifyContent};
            gap: ${gap}px;
            ${className}
        `}
    >
        {children}
    </div>
);
