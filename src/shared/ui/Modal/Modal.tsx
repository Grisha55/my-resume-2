import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@/src/shared/lib/classNames/classNames';
import { useTheme } from '@/src/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/src/shared/hooks/useModal/useModal';
import { toggleFeatures } from '@/src/shared/lib/features/lib/toggleFeatures';
import { Theme } from '../../consts/theme';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
        closeOnOverlayClick = true,
    } = props;

    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    useEffect(() => {
        // eslint-disable-next-line
        setMounted(true);
    }, []);

    const handleOverlayClick = () => {
        if (closeOnOverlayClick) {
            close();
        }
    };

    if (lazy && !isMounted) {
        return null;
    }

    if (!mounted) {
        return null;
    }

    const modalContainerStyles = `
        fixed inset-0 z-50
        flex items-center justify-center
        transition-all duration-300 ease-out
        ${isOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'}
        ${isOpen ? 'visible' : 'invisible'}
    `;

    // Определяем цвет оверлея в зависимости от темы
    const isDarkTheme = theme === Theme.DARK || document.body.classList.contains('app_dark_theme');
    const overlayColor = isDarkTheme ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    
    const overlayStyles = `
        absolute inset-0
        transition-all duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0'}
    `;

    // Разные стили для новой и старой версии дизайна
    const getContentStyles = () => {
        const cardBg = isDarkTheme ? '#0a0a0a' : '#ffffff';
        const accentColor = isDarkTheme ? 'rgba(0,255,65,0.2)' : 'rgba(0,128,0,0.15)';
        
        if (toggleFeatures({ name: 'isAppRedesigned', on: () => true, off: () => false })) {
            // Редизайн версия
            return `
                relative bg-[${cardBg}]
                rounded-2xl p-6 max-w-md w-full mx-4
                shadow-[0_0_30px_${accentColor}]
                border border-[var(--accent-redesigned)]/30
                transform transition-all duration-300 ease-out
                ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 -translate-y-4 opacity-0'}
                ${isClosing ? 'scale-95 translate-y-0' : ''}
            `;
        } else {
            // Старая версия
            return `
                relative bg-[${cardBg}]
                rounded-lg p-6 max-w-md w-full mx-4
                shadow-xl
                transform transition-all duration-300 ease-out
                ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-4 opacity-0'}
            `;
        }
    };

    const closeButtonStyles = `
        absolute top-4 right-4
        w-8 h-8 rounded-full
        flex items-center justify-center
        transition-all duration-200
        hover:bg-[var(--bg-redesigned)]/10
        focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
        text-[var(--icon-redesigned)] hover:text-[var(--cancel-redesigned)]
        cursor-pointer
    `;

    const portalContainer = document.getElementById('app') || document.body;

    return createPortal(
        <div 
            className={modalContainerStyles}
            data-testid="modal"
        >
            {/* Overlay */}
            <div 
                className={overlayStyles}
                style={{ backgroundColor: overlayColor }}
                onClick={handleOverlayClick}
                data-testid="modal.overlay"
            />
            
            {/* Modal Content */}
            <div 
                className={classNames(getContentStyles(), {}, [className])}
                data-testid="modal.content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* Кнопка закрытия */}
                <button
                    onClick={close}
                    className={closeButtonStyles}
                    aria-label="Закрыть"
                    data-testid="modal.close"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                {children}
            </div>
        </div>,
        portalContainer
    );
};

Modal.displayName = 'Modal';