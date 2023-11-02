import { css } from '@emotion/css';

import {
    BACKGOUND_COLOR,
    BACKGOUND_COLOR_ACTIVE,
    SELECT_BORDER,
    SELECT_FONT_SIZE,
    SELECT_HEIGHT,
    SELECT_PADDING_RIGHT,
    SELECT_PADDING_TOP
} from '../constants';

export const wrapperStyles = css`
    background-color: ${BACKGOUND_COLOR};
    margin-top: 5px;
    height: calc(${SELECT_HEIGHT} * 4);
    overflow-y: scroll;
    border-bottom: ${SELECT_BORDER};
`;

export const getOptionStyles = (isSelected: boolean) => css`
    padding: ${SELECT_PADDING_TOP} ${SELECT_PADDING_RIGHT};
    border: ${SELECT_BORDER};
    font-size: ${SELECT_FONT_SIZE};
    min-height: ${SELECT_HEIGHT};
    cursor: ${isSelected ? 'default' : 'pointer'};
    background-color: ${isSelected ? BACKGOUND_COLOR_ACTIVE : BACKGOUND_COLOR};

    &:hover {
        background-color: ${BACKGOUND_COLOR_ACTIVE};
    }
`;
