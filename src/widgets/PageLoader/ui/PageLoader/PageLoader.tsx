'use client';

import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
    className?: string;
}

const binarySequence = ['01001110', '01101111', '01110111', '00100000', '01001100', '01101111', '01100001', '01100100', '01101001', '01101110', '01100111'];

export const PageLoader = ({ className }: PageLoaderProps) => {
    const [binaryIndex, setBinaryIndex] = useState(0);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const binaryInterval = setInterval(() => {
            setBinaryIndex((prev) => (prev + 1) % binarySequence.length);
        }, 300);

        const glitchInterval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 100);
        }, 2000);

        return () => {
            clearInterval(binaryInterval);
            clearInterval(glitchInterval);
        };
    }, []);

    return (
        <div className={`flex flex-col items-center justify-center gap-6 ${className}`}>
            <div className="relative">
                <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                        <div
                            key={i}
                            className="h-2 w-2 bg-green-500 rounded-sm animate-pulse"
                            style={{
                                animationDelay: `${(i % 4) * 100 + Math.floor(i / 4) * 50}ms`,
                                opacity: i % 3 === 0 ? 0.3 : 1,
                            }}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-green-500 text-sm tracking-wider">
                        {binarySequence[binaryIndex]}
                    </div>
                </div>
            </div>
            <div className={`font-mono text-green-500 text-xl font-bold tracking-wider ${glitch ? 'animate-[glitch_0.1s_ease-in-out]' : ''}`}>
                {glitch ? '>_SYSTEM_BREACH' : '>_HACKING_MAINFRAME'}
            </div>
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="h-1 bg-green-500 rounded-full animate-pulse"
                        style={{
                            animationDelay: `${i * 100}ms`,
                            width: `${16 + i * 8}px`,
                        }}
                    />
                ))}
            </div>
            <style jsx>{`
                @keyframes glitch {
                    0% {
                        transform: skew(0deg, 0deg);
                        opacity: 1;
                    }
                    25% {
                        transform: skew(5deg, 2deg);
                        opacity: 0.8;
                        text-shadow: -2px 0 red;
                    }
                    50% {
                        transform: skew(-5deg, -2deg);
                        opacity: 0.9;
                        text-shadow: 2px 0 blue;
                    }
                    75% {
                        transform: skew(3deg, 1deg);
                        opacity: 0.85;
                    }
                    100% {
                        transform: skew(0deg, 0deg);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};