import { css } from '@emotion/css';

import { SELECT_ZINDEX } from 'src/constants';

import {
    BACKGOUND_COLOR,
    SELECT_BORDER,
    SELECT_FONT_SIZE,
    SELECT_HEIGHT,
    SELECT_PADDING_RIGHT,
    SELECT_PADDING_TOP,
    SELECT_WIDTH
} from './constants';

export const baseStyles = css`
    z-index: ${SELECT_ZINDEX};
    min-width: ${SELECT_WIDTH};
    min-height: ${SELECT_HEIGHT};
`;

export const getWrapperStyles = (isOpen: boolean) => css`
    width: 100%;
    cursor: pointer;
    background-color: ${BACKGOUND_COLOR};
    border-radius: 10px;
    padding: ${SELECT_PADDING_TOP} ${SELECT_PADDING_RIGHT};
    border: ${SELECT_BORDER};
    transition: all 0.3s;
    ${!isOpen && 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}
`;

export const inputStyles = css`
    cursor: pointer;
    outline: none;
    font-size: ${SELECT_FONT_SIZE};
`;
