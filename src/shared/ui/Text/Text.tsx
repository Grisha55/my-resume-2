import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

// Размеры для заголовков
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

// Стили для размеров
const sizeStyles: Record<TextSize, { title: string; text: string }> = {
    s: {
        title: 'text-lg font-semibold',
        text: 'text-sm',
    },
    m: {
        title: 'text-xl font-bold',
        text: 'text-base',
    },
    l: {
        title: 'text-3xl font-bold',
        text: 'text-lg',
    },
};

// Стили для вариантов (цветов)
const variantStyles: Record<TextVariant, { title: string; text: string }> = {
    primary: {
        title: 'text-[var(--text-redesigned)]',
        text: 'text-[var(--text-redesigned)]',
    },
    error: {
        title: 'text-[var(--cancel-redesigned)]',
        text: 'text-[var(--cancel-redesigned)]',
    },
    accent: {
        title: 'text-[var(--accent-redesigned)]',
        text: 'text-[var(--accent-redesigned)]',
    },
};

// Стили для выравнивания
const alignStyles: Record<TextAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeStyle = sizeStyles[size];
    const variantStyle = variantStyles[variant];
    const alignStyle = alignStyles[align];

    // Стили для заголовка
    const titleClasses = classNames(
        'transition-colors duration-200',
        { 'font-bold': bold },
        [sizeStyle.title, variantStyle.title, alignStyle]
    );

    // Стили для текста
    const textClasses = classNames(
        'transition-colors duration-200',
        {},
        [sizeStyle.text, variantStyle.text, alignStyle]
    );

    return (
        <div className={classNames('', {}, [className])}>
            {title && (
                <HeaderTag
                    className={titleClasses}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={textClasses}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});

Text.displayName = 'Text';