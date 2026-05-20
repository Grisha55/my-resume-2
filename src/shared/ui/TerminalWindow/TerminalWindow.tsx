'use client';

import { ReactNode } from 'react';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { TypingHeader } from '@/src/shared/ui/TypingHeader';
import { TerminalLine } from '@/src/shared/ui/TerminalLine';

interface TerminalWindowProps {
    className?: string;
    title?: string;
    subtitle?: string;
    headerText?: string;
    children?: ReactNode;
    showWindowButtons?: boolean;
    showTypingHeader?: boolean;
    showTerminalLine?: boolean;
    terminalLineText?: string;
    terminalLineVariant?: 'default' | 'success' | 'error' | 'warning';
    withPadding?: boolean;
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
}

export const TerminalWindow = ({ 
    className,
    title = 'root@resume:~/projects$',
    subtitle = 'ls -la /projects --details',
    headerText = '>_ Проекты!',
    children,
    showWindowButtons = true,
    showTypingHeader = true,
    showTerminalLine = true,
    terminalLineText = 'SYSTEM:ACTIVE',
    terminalLineVariant = 'default',
    withPadding = true,
    onClose,
    onMinimize,
    onMaximize
}: TerminalWindowProps) => {
    return (
        <div className={classNames(
            'bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] backdrop-blur-sm overflow-hidden w-full',
            {},
            [className || '']
        )} style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
            {/* Заголовок окна с кнопками */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-(--primary-color)/30 bg-black/50">
                <div className="flex gap-2">
                    <button 
                        onClick={onClose}
                        className="w-3 h-3 transition-opacity bg-red-500 rounded-full hover:opacity-80"
                        aria-label="Закрыть"
                    />
                    <button 
                        onClick={onMinimize}
                        className="w-3 h-3 transition-opacity bg-yellow-500 rounded-full hover:opacity-80"
                        aria-label="Свернуть"
                    />
                    <button 
                        onClick={onMaximize}
                        className="w-3 h-3 transition-opacity bg-green-500 rounded-full hover:opacity-80"
                        aria-label="Развернуть"
                    />
                </div>
                <span className="text-(--primary-color) text-xs font-mono">
                    {title}
                </span>
                <div className="w-16" />
            </div>

            {/* Контент */}
            <div className={classNames('', { 'p-6 md:p-8': withPadding })}>
                {showTypingHeader && (
                    <TypingHeader 
                        text={headerText} 
                        subtitle={subtitle}
                    />
                )}
                {children}
            </div>

            {showTerminalLine && (
                <div className="px-6 pb-6">
                    <TerminalLine text={terminalLineText} variant={terminalLineVariant} />
                </div>
            )}
        </div>
    );
};

TerminalWindow.displayName = 'TerminalWindow';