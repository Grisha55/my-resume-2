// shared/ui/redesigned/Flex/Flex.tsx
import { DetailedHTMLProps, HTMLAttributes, ReactNode, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
}

// Классы для justify-content
const justifyClasses: Record<FlexJustify, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
};

// Классы для align-items
const alignClasses: Record<FlexAlign, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
};

// Классы для direction
const directionClasses: Record<FlexDirection, string> = {
    row: 'flex-row',
    column: 'flex-col',
};

// Классы для wrap
const wrapClasses: Record<FlexWrap, string> = {
    nowrap: 'flex-nowrap',
    wrap: 'flex-wrap',
};

// Классы для gap
const gapClasses: Record<FlexGap, string> = {
    4: 'gap-1',      // 4px
    8: 'gap-2',      // 8px
    16: 'gap-4',     // 16px
    24: 'gap-6',     // 24px
    32: 'gap-8',     // 32px
};

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        wrap = 'nowrap',
        gap,
        max,
        ...otherProps
    } = props;

    const mods: Mods = {
        'w-full': max, // max === true → width: 100%
    };

    const additionalClasses = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        wrapClasses[wrap],
        gap && gapClasses[gap],
    ];

    return (
        <div
            className={classNames('flex', mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Flex.displayName = 'Flex';