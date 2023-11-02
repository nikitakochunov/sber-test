import React from 'react';

import { getTitleStyles } from './styles';
import type { TTitleProps } from './types';
import { TITLE_COLOR_INITIAL } from './constants';

export const Title = ({
    text,
    variant,
    color = TITLE_COLOR_INITIAL,
    className = ''
}: TTitleProps) =>
    React.createElement(
        variant,
        {
            className: getTitleStyles(color, className)
        },
        text
    );
