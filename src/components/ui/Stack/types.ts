import type { PropsWithChildren } from 'react';

type TAligmentBasic = 'flex-start' | 'flex-end' | 'center';

type TFlexProps = {
    direction?: 'row' | 'column';
    wrap?: 'wrap' | 'no-wrap' | 'wrap-revers';
    alignItems?: TAligmentBasic | ('stretch' | 'baseline');
    justifyContent?:
        | TAligmentBasic
        | ('space-between' | 'space-around' | 'space-evenly');
    gap?: number;
};

export type TStackProps = PropsWithChildren<
    {
        className?: string;
    } & TFlexProps
>;
