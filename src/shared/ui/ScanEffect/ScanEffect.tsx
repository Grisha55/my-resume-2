'use client';

import { classNames } from '@/src/shared/lib/classNames/classNames';

interface ScanEffectProps {
    className?: string;
    color?: string;
    direction?: 'horizontal' | 'vertical';
    speed?: 'slow' | 'normal' | 'fast';
    thickness?: 'thin' | 'normal' | 'thick';
    intensity?: 'light' | 'normal' | 'strong';
}

const speedClasses = {
    slow: 'animate-scan-slow',
    normal: 'animate-scan',
    fast: 'animate-scan-fast',
};

const thicknessClasses = {
    thin: 'h-0.5',
    normal: 'h-1',
    thick: 'h-1.5',
};

const directionClasses = {
    horizontal: 'top-0 left-0 right-0',
    vertical: 'left-0 top-0 bottom-0 w-0.5 h-full',
};

const verticalSpeedClasses = {
    slow: 'animate-scan-vertical-slow',
    normal: 'animate-scan-vertical',
    fast: 'animate-scan-vertical-fast',
};

export const ScanEffect = ({ 
    className, 
    color = 'var(--primary-color)',
    direction = 'horizontal',
    speed = 'normal',
    thickness = 'normal',
    intensity = 'normal'
}: ScanEffectProps) => {
    const isHorizontal = direction === 'horizontal';
    const animationClass = isHorizontal ? speedClasses[speed] : verticalSpeedClasses[speed];
    const sizeClass = isHorizontal ? thicknessClasses[thickness] : 'w-0.5';
    const positionClass = isHorizontal ? directionClasses.horizontal : directionClasses.vertical;
    
    const shadowSize = intensity === 'light' ? 5 : intensity === 'normal' ? 10 : 20;

    return (
        <div className={classNames('absolute inset-0 overflow-hidden pointer-events-none', {}, [className || ''])}>
            <div 
                className={`absolute ${positionClass} ${sizeClass} ${animationClass}`}
                style={{ 
                    backgroundColor: color,
                    boxShadow: `0 0 ${shadowSize}px ${color}`
                }}
            />
        </div>
    );
};

ScanEffect.displayName = 'ScanEffect';