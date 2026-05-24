import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
	onClose?: () => void;
	isOpen?: boolean;
	animationDelay: number;
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/ modal)
 * @param animationDelay
 * @param onClose
 * @param isOpen
 */

export function useModal({ animationDelay, isOpen, onClose }: UseModalProps) {
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

	useEffect(() => {
		// eslint-disable-next-line
		setIsMounted(true);
	}, [isOpen]);

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, animationDelay);
		}
	}, [animationDelay, onClose]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close();
		}
	}, [close]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown);
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = null;
			}
		};
	}, [isOpen, onKeyDown]);

	return {
		isClosing,
		isMounted,
		close
	};
}