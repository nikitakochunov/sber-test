import { css } from '@emotion/css';

import { TITLE_FONT_SIZE } from './constants';
import type { TColor } from './types';

export const getTitleStyles = (color: TColor, className: string) => css`
    display: inline-block;
    font-size: ${TITLE_FONT_SIZE};
    color: ${color};
    ${className}
`;
