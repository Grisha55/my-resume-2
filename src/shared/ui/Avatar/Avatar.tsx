'use client';

import { CSSProperties, useMemo } from 'react';
import Image from 'next/image';
import { classNames, Mods } from '@/src/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt = '' }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const mods: Mods = {};

    if (!src) {
        return (
            <div
                className="flex items-center justify-center rounded-full bg-(--bg-redesigned) border border-(--primary-color)/30"
                style={styles}
            >
                <svg
                    className="w-1/2 h-1/2 text-(--icon-redesigned)"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
            </div>
        );
    }

    return (
        <div
            className={classNames('relative overflow-hidden rounded-full', mods, [className])}
            style={styles}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    );
};

Avatar.displayName = 'Avatar';