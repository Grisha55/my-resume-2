'use client';

import { usePathname } from 'next/navigation';
import { memo, ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { NavLink } from '../NavLink';

export type AppLinkVariant = 'primary' | 'secondary' | 'red' | 'accent';
export type AppLinkSize = 'sm' | 'md' | 'lg';

interface AppLinkProps {
    href: string;
    className?: string;
    variant?: AppLinkVariant;
    size?: AppLinkSize;
    children?: ReactNode;
    activeClassName?: string;
    inactiveClassName?: string;
    exact?: boolean;
    onClick?: () => void;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
}

// Стили для разных вариантов
const variantStyles: Record<AppLinkVariant, string> = {
    primary: 'text-[var(--primary-color)] hover:text-[var(--accent-redesigned)]',
    secondary: 'text-[var(--text-secondary)] hover:text-[var(--primary-color)]',
    red: 'text-[var(--cancel-redesigned)] hover:text-red-400',
    accent: 'text-[var(--accent-redesigned)] hover:text-[var(--primary-color)]',
};

// Стили для размеров
const sizeStyles: Record<AppLinkSize, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
};

export const AppLink = memo((props: AppLinkProps) => {
    const {
        href,
        className,
        children,
        variant = 'primary',
        size = 'md',
        activeClassName = '',
        inactiveClassName = '',
        exact = false,
        onClick,
        target,
        rel,
        ...otherProps
    } = props;

    const pathname = usePathname();
    
    // Проверяем активна ли ссылка
    const isActive = exact ? pathname === href : pathname?.startsWith(href);
    
    // Базовые стили
    const baseStyles = `
        transition-all duration-200
        font-medium inline-flex items-center gap-1
        focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
        rounded-lg
    `;
    
    // Стили для активного/неактивного состояния
    const stateStyles = isActive ? activeClassName : inactiveClassName;
    
    // Стили варианта и размера
    const variantStyle = variantStyles[variant];
    const sizeStyle = sizeStyles[size];
    
    const finalClassName = classNames(
        baseStyles,
        {},
        [variantStyle, sizeStyle, stateStyles, className || '']
    );

    // Безопасные атрибуты для target="_blank"
    const safeRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;

    return (
        <NavLink
            href={href}
            className={finalClassName}
            onClick={onClick}
            target={target}
            rel={safeRel}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

AppLink.displayName = 'AppLink';