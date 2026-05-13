// shared/ui/Skeleton/Skeleton.tsx
import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';

export type SkeletonVariant = 'circular' | 'rectangular' | 'rounded';
export type SkeletonSize = 'sm' | 'md' | 'lg';

interface SkeletonProps {
    className?: string;
    variant?: SkeletonVariant;
    size?: SkeletonSize;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    animated?: boolean;
}

// Размеры по умолчанию
const sizeMap: Record<SkeletonSize, { width: string; height: string; borderRadius: string }> = {
    sm: { width: '32px', height: '32px', borderRadius: '8px' },
    md: { width: '48px', height: '48px', borderRadius: '12px' },
    lg: { width: '64px', height: '64px', borderRadius: '16px' },
};

// Варианты формы
const variantStyles: Record<SkeletonVariant, string> = {
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
};

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        variant = 'rounded',
        size,
        width,
        height,
        borderRadius,
        animated = true,
    } = props;

    // Определяем размеры
    let finalWidth = width;
    let finalHeight = height;
    let finalBorderRadius = borderRadius;

    if (size) {
        finalWidth = finalWidth || sizeMap[size].width;
        finalHeight = finalHeight || sizeMap[size].height;
        finalBorderRadius = finalBorderRadius || sizeMap[size].borderRadius;
    }

    const styles: React.CSSProperties = {
        width: finalWidth,
        height: finalHeight,
        borderRadius: finalBorderRadius,
    };

    const variantClass = variantStyles[variant];

    const animationClass = animated ? 'animate-pulse' : '';

    return (
        <div
            className={classNames(
                `bg-(--skeleton-color) ${variantClass} ${animationClass}`,
                {},
                [className]
            )}
            style={styles}
        />
    );
});

Skeleton.displayName = 'Skeleton';