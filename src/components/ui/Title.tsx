import React from 'react';
import { css } from '@emotion/css';

type TitleProps = {
    text: string;
    variant: 'h1' | 'h2' | 'h3';
    color?: `#${string}`;
    className?: string;
};

export const Title = ({ text, variant, color = '#000', className = '' }: TitleProps) =>
    React.createElement(
        variant,
        {
            className: css`
                display: inline-block;
                font-size: 96px;
                color: ${color};
                ${className}
            `
        },
        text
    );
