'use client';

import { useEffect, useState } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface HackerBackgroundProps {
    className?: string;
    opacity?: number;
    matrixColor?: string;
    matrixSize?: number;
    animated?: boolean;
    children?: React.ReactNode;
}

export const HackerBackground = ({ 
    className, 
    opacity = 10,
    matrixColor = '#00ff41',
    matrixSize = 30,
    animated = false,
    children 
}: HackerBackgroundProps) => {
    const [matrixOffset, setMatrixOffset] = useState(0);

    useEffect(() => {
        if (!animated) return;
        
        const interval = setInterval(() => {
            setMatrixOffset(prev => (prev + 1) % matrixSize);
        }, 100);
        
        return () => clearInterval(interval);
    }, [animated, matrixSize]);

    const matrixPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='${encodeURIComponent(matrixColor)}' font-family='monospace' font-size='12'%3E01%3C/text%3E%3C/svg%3E")`;

    return (
        <div className={classNames('relative', {}, [className || ''])}>
            {/* Хакерский фон */}
            <div 
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ opacity: opacity / 100 }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
                <div
                    className="absolute inset-0 bg-repeat"
                    style={{
                        backgroundImage: matrixPattern,
                        backgroundSize: `${matrixSize}px ${matrixSize}px`,
                        ...(animated && {
                            backgroundPosition: `0 ${matrixOffset}px`,
                            transition: 'background-position 0.1s linear'
                        })
                    }}
                />
            </div>
            
            {/* Контент поверх фона */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

HackerBackground.displayName = 'HackerBackground';