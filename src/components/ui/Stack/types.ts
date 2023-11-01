import type { PropsWithChildren } from 'react';

type AligmentBasicType = 'flex-start' | 'flex-end' | 'center';

type FlexProps = {
    direction?: 'row' | 'column';
    wrap?: 'wrap' | 'no-wrap' | 'wrap-revers';
    alignItems?: AligmentBasicType | ('stretch' | 'baseline');
    justifyContent?: AligmentBasicType | ('space-between' | 'space-around' | 'space-evenly');
    gap?: number;
};

export type StackProps = PropsWithChildren<
    {
        className?: string;
    } & FlexProps
>;
