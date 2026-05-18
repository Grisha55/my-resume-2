// shared/ui/AppImage/AppImage.tsx
'use client';

import { memo, ReactElement, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface AppImageProps {
    className?: string;
    src?: string | StaticImageData;
    alt?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    quality?: number;
    priority?: boolean;
    unoptimized?: boolean;
    onLoad?: () => void;
    onError?: () => void;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        errorFallback,
        fallback,
        width,
        height,
        fill,
        sizes,
        quality,
        priority,
        unoptimized,
        onLoad,
        onError,
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        onLoad?.();
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        onError?.();
    };

    // Если нет src или ошибка - показываем errorFallback
    if (!src || hasError) {
        return errorFallback || null;
    }

    if (isLoading && fallback) {
        return fallback;
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            sizes={sizes}
            quality={quality}
            priority={priority}
            unoptimized={unoptimized}
            className={classNames(
                'transition-opacity duration-300',
                { 'opacity-0': isLoading, 'opacity-100': !isLoading },
                [className]
            )}
            onLoad={handleLoad}
            onError={handleError}
        />
    );
});

AppImage.displayName = 'AppImage';