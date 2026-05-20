'use client';

import { useEffect, useState } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';

interface TypingHeaderProps {
    text: string;
    className?: string;
    typingSpeed?: number;
    cursorSpeed?: number;
    showCursor?: boolean;
    showSubtitle?: boolean;
    subtitle?: string;
    subtitleCommand?: string;
    onComplete?: () => void;
    onCharTyped?: (char: string, index: number) => void;
    autoStart?: boolean;
    loop?: boolean;
    loopDelay?: number;
}

export const TypingHeader = ({ 
    text, 
    className,
    typingSpeed = 80,
    cursorSpeed = 500,
    showCursor = true,
    showSubtitle = true,
    subtitle = 'cat about.md --verbose',
    subtitleCommand = '$',
    onComplete,
    onCharTyped,
    autoStart = true,
    loop = false,
    loopDelay = 2000
}: TypingHeaderProps) => {
    const [typedText, setTypedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(autoStart);
    const [loopCount, setLoopCount] = useState(0);

    // Эффект печатающей машинки
    useEffect(() => {
        if (!isTyping) return;
        
        let i = typedText.length;
        const interval = setInterval(() => {
            if (i < text.length) {
                const newChar = text[i];
                setTypedText(text.slice(0, i + 1));
                onCharTyped?.(newChar, i);
                i++;
            } else {
                clearInterval(interval);
                setIsComplete(true);
                onComplete?.();
                
                if (loop) {
                    setTimeout(() => {
                        setTypedText('');
                        setIsComplete(false);
                        setLoopCount(prev => prev + 1);
                    }, loopDelay);
                }
            }
        }, typingSpeed);
        
        return () => clearInterval(interval);
    }, [text, typingSpeed, isTyping, typedText.length, onComplete, onCharTyped, loop, loopDelay]);

    // Мигающий курсор
    useEffect(() => {
        if (!showCursor) return;
        
        const interval = setInterval(() => {
            setIsCursorVisible(prev => !prev);
        }, cursorSpeed);
        return () => clearInterval(interval);
    }, [showCursor, cursorSpeed]);

    const resetTyping = () => {
        setTypedText('');
        setIsComplete(false);
        setIsTyping(true);
    };

    return (
        <div className={classNames('mb-8', {}, [className || ''])}>
            <h1 className="text-2xl md:text-3xl text-(--primary-color) font-bold font-mono">
                {typedText}
                {showCursor && !isComplete && (
                    <span className={`transition-opacity duration-100 ${isCursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                        █
                    </span>
                )}
            </h1>
            {showSubtitle && (
                <div className="mt-2 font-mono text-sm text-gray-500">
                    <span className="text-(--primary-color)">{subtitleCommand}</span> {subtitle}
                </div>
            )}
            {loop && loopCount > 0 && (
                <div className="mt-1 font-mono text-xs text-gray-600">
                    iteration: {loopCount}
                </div>
            )}
        </div>
    );
};

TypingHeader.displayName = 'TypingHeader';