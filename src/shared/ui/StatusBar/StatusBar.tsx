'use client';

import { ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { HStack } from '@/src/shared/ui/Stack';

interface StatusBarItem {
    icon?: string;
    label: string;
    value?: string | number;
    color?: string;
}

interface StatusBarProps {
    className?: string;
    user?: string;
    path?: string;
    isOnline?: boolean;
    showOnlineStatus?: boolean;
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    rightItems?: StatusBarItem[];
    variant?: 'default' | 'error' | 'success' | 'warning';
    withBorder?: boolean;
    withMargin?: boolean;
    withAnimation?: boolean;
}

const variantStyles = {
    default: {
        textColor: 'text-gray-500',
        accentColor: 'text-[var(--primary-color)]',
        pathColor: 'text-gray-500'
    },
    error: {
        textColor: 'text-red-500',
        accentColor: 'text-red-500',
        pathColor: 'text-red-500'
    },
    success: {
        textColor: 'text-green-500',
        accentColor: 'text-green-500',
        pathColor: 'text-green-500'
    },
    warning: {
        textColor: 'text-yellow-500',
        accentColor: 'text-yellow-500',
        pathColor: 'text-yellow-500'
    }
};

export const StatusBar = ({ 
    className,
    user = 'user@resume',
    path = '~',
    isOnline = true,
    showOnlineStatus = true,
    leftContent,
    rightContent,
    rightItems,
    variant = 'default',
    withBorder = true,
    withMargin = true,
    withAnimation = true
}: StatusBarProps) => {
    const styles = variantStyles[variant];
    const onlineStatusClass = isOnline ? styles.accentColor : 'text-red-500';
    const onlineStatusText = isOnline ? '● ONLINE' : '● OFFLINE';
    const animationClass = withAnimation ? 'animate-pulse' : '';

    const defaultLeftContent = (
        <HStack gap="16" align="center">
            <span className={`font-mono text-xs ${styles.textColor}`}>
                {user}:{path}$
            </span>
            {showOnlineStatus && (
                <span className={`${onlineStatusClass} text-xs font-mono ${animationClass}`}>
                    {onlineStatusText}
                </span>
            )}
        </HStack>
    );

    const defaultRightContent = rightItems ? (
        <HStack gap="8" align="center">
            {rightItems.map((item, index) => (
                <span key={index} className={`font-mono text-xs ${item.color || styles.textColor}`}>
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}{item.value !== undefined && `: ${item.value}`}
                </span>
            ))}
        </HStack>
    ) : rightContent;

    return (
        <div className={classNames(
            'text-xs font-mono',
            {
                'pt-3 border-t border-(--primary-color)/30': withBorder,
                'mt-6': withMargin
            },
            [className || '']
        )}>
            <div className="flex flex-wrap justify-between gap-2">
                <div>{leftContent || defaultLeftContent}</div>
                <div>{defaultRightContent}</div>
            </div>
        </div>
    );
};

StatusBar.displayName = 'StatusBar';