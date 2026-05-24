import { Modal } from '@/src/shared/ui/Modal/Modal';
import { ReactNode } from 'react';

interface HackerModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    title?: string;
    content?: string;
    // Новые пропсы для кнопок
    showButtons?: boolean;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
}

export const HackerModal = ({ 
    isOpen, 
    onClose, 
    title, 
    content,
    showButtons = false,
    confirmText = 'Подтвердить',
    cancelText = 'Отмена',
    onConfirm
}: HackerModalProps) => {
    const handleConfirm = () => {
        onConfirm?.();
        onClose?.();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-4">
                {/* ASCII заголовок */}
                <div className="text-center">
                    <div className="text-(--primary-color) font-mono text-sm">
                        {`> ${title || 'ENTER_COMMAND'}`}
                    </div>
                    <div className="h-px bg-linear-to-r from-transparent via-(--primary-color) to-transparent my-2" />
                </div>
                
                {/* Контент */}
                <div className="text-(--text-redesigned) font-mono text-sm space-y-2">
                    {content}
                </div>
                
                {/* Кнопки */}
                {showButtons && (
                    <div className="flex gap-3 pt-2">
                        <button
                            onClick={handleConfirm}
                            className="flex-1 py-2 bg-(--primary-color) text-black rounded-lg font-mono text-sm hover:opacity-90 transition"
                        >
                            $&gt; {confirmText}
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 py-2 border border-(--primary-color) text-(--primary-color) rounded-lg font-mono text-sm hover:bg-(--primary-color)/10 transition"
                        >
                            $&gt; {cancelText}
                        </button>
                    </div>
                )}
                
                {/* Терминальная строка ввода */}
                <div className="flex items-center gap-2 pt-4 border-t border-(--primary-color)/30">
                    <span className="text-(--primary-color)">$&gt;</span>
                    <span className="text-(--text-redesigned) text-sm opacity-70">
                        press ESC to close_
                    </span>
                </div>
            </div>
        </Modal>
    );
};