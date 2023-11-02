import { css } from '@emotion/css';
import { MEDIA_WIDTH } from './constants';

export const stackStyles = css`
    padding-top: 28px;

    @media (max-width: ${MEDIA_WIDTH}px) {
        justify-content: center;
    }
`;

export const imgStyles = css`
    position: relative;
    top: -28px;
`;
