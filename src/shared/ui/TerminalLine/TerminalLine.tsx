'use client';

import { useEffect, useState } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface TerminalLineProps {
    className?: string;
    text?: string;
    symbol?: string;
    animated?: boolean;
    variant?: 'default' | 'success' | 'error' | 'warning';
    blinking?: boolean;
}

const variantColors = {
    default: 'text-gray-600',
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
};

export const TerminalLine = ({ 
    className, 
    text = 'READY',
    symbol = '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿',
    animated = true,
    variant = 'default',
    blinking = false,
}: TerminalLineProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const colorClass = variantColors[variant];
    const animationClass = animated ? 'animate-pulse' : '';

    useEffect(() => {
        if (!blinking) return;
        
        const interval = setInterval(() => {
            setIsVisible(prev => !prev);
        }, 500);
        
        return () => clearInterval(interval);
    }, [blinking]);

    return (
        <div className={classNames('w-full text-center', {}, [className || ''])}>
            <span className={classNames(
                'font-mono text-xs select-none',
                {},
                [colorClass, animationClass]
            )}
            style={{ opacity: blinking && !isVisible ? 0 : 1 }}
            >
                {symbol} {text} {symbol}
            </span>
        </div>
    );
};

TerminalLine.displayName = 'TerminalLine';