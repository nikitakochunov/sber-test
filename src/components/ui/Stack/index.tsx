import { css } from '@emotion/css';

import type { StackProps } from './types';

export const Stack = ({
    children,
    direction = 'row',
    wrap = 'wrap',
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    gap = 0,
    className
}: StackProps) => (
    <div
        style={{ alignItems: '' }}
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
