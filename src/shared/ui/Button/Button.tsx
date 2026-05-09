// components/ui/Button/Button.tsx
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    color?: ButtonColor;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'outline',
            square,
            disabled,
            fullWidth,
            size = 'm',
            addonLeft,
            addonRight,
            color = 'normal',
            ...otherProps
        } = props;

        // Размеры
        const sizeStyles = {
            m: square ? 'w-9 h-9 text-sm' : 'px-4 py-2 text-sm',
            l: square ? 'w-11 h-11 text-base' : 'px-6 py-3 text-base',
            xl: square ? 'w-14 h-14 text-lg' : 'px-8 py-4 text-lg',
        };

        // Базовые стили
        const baseStyles = `
            rounded-lg font-medium transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
        `;

        // Стили для разных вариантов с использованием CSS переменных
        const variantStyles = {
            clear: `
                bg-transparent 
                hover:bg-[var(--bg-redesigned)] 
                active:bg-[var(--dark-bg-redesigned)]
                text-[var(--text-redesigned)]
            `,
            outline: `
                border border-[var(--icon-redesigned)]
                bg-transparent
                hover:bg-[var(--bg-redesigned)]
                active:bg-[var(--dark-bg-redesigned)]
                text-[var(--text-redesigned)]
            `,
            filled: `
                bg-[var(--primary-color)]
                text-white
                hover:opacity-90
                active:opacity-80
                shadow-sm
            `,
        };

        // Стили для разных цветов (для outline и clear вариантов)
        const colorStyles = {
            normal: {
                clear: 'text-[var(--text-redesigned)]',
                outline: 'text-[var(--text-redesigned)] border-[var(--icon-redesigned)]',
                filled: 'bg-[var(--primary-color)]',
            },
            success: {
                clear: 'text-[var(--save-redesigned)] hover:bg-[var(--save-redesigned)]/10',
                outline: 'text-[var(--save-redesigned)] border-[var(--save-redesigned)] hover:bg-[var(--save-redesigned)]/10',
                filled: 'bg-[var(--save-redesigned)]',
            },
            error: {
                clear: 'text-[var(--cancel-redesigned)] hover:bg-[var(--cancel-redesigned)]/10',
                outline: 'text-[var(--cancel-redesigned)] border-[var(--cancel-redesigned)] hover:bg-[var(--cancel-redesigned)]/10',
                filled: 'bg-[var(--cancel-redesigned)]',
            },
        };

        const mods: Mods = {
            'opacity-50 cursor-not-allowed': disabled,
            'w-full': fullWidth,
        };

        // Выбираем стили
        const sizeStyle = sizeStyles[size];
        const variantStyle = variantStyles[variant];
        const colorStyle = colorStyles[color][variant];

        // Для filled варианта переопределяем цвет
        const finalVariantStyle = variant === 'filled' && color !== 'normal'
            ? colorStyle
            : variantStyle;

        const buttonClasses = classNames(
            baseStyles,
            mods,
            [sizeStyle, finalVariantStyle, className || '']
        );

        return (
            <button
                type="button"
                className={buttonClasses}
                disabled={disabled}
                ref={ref}
                {...otherProps}
            >
                {addonLeft && <span className="shrink-0">{addonLeft}</span>}
                {children}
                {addonRight && <span className="shrink-0">{addonRight}</span>}
            </button>
        );
    }
);

Button.displayName = 'Button';