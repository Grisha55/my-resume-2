'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect/ScanEffect';
import { HStack, VStack } from '@/src/shared/ui/Stack';
import { StatusBar } from '@/src/shared/ui/StatusBar/StatusBar';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import Link from 'next/link';
import { HackerModal } from '@/src/shared/ui/Modal/HackerModal';

export function AboutView() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations();
    const fullText = t('main_title');
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        hoverTimeoutRef.current = setTimeout(() => {
            setIsModalOpen(true);
        }, 300);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        closeTimeoutRef.current = setTimeout(() => {
            setIsModalOpen(false);
        }, 300);
    };

    const handleModalMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const handleModalMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsModalOpen(false);
        }, 300);
    };

    // Очистка таймеров при размонтировании
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            className="relative min-h-screen pb-16"
            style={{ paddingTop: '100px' }}
        >
            <HackerBackground />
            <ScanEffect speed="slow" />

            <Container maxWidth="lg">
                <VStack gap="16" className="w-full">
                    <TerminalWindow
                        title="root@resume:~/about$"
                        subtitle="cat about-me.txt --verbose"
                        headerText={fullText}
                        withPadding={false}
                    >
                        <VStack gap="24" className="w-full md:p-8" style={{ padding: '20px' }}>
                            <VStack gap="24" className="w-full">
                                {/* Блок 1 */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('tennis_to_code_title')}</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('tennis_to_code_text')}
                                    </p>
                                </VStack>

                                {/* Блок 2 */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('first_code_title')}</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('first_code_text')}
                                    </p>
                                </VStack>

                                {/* Блок 3 */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('why_web_title')}</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('why_web_text')}
                                    </p>
                                </VStack>

                                {/* Блок 4 - с интерактивным словом Альфа */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('philosophy_title')}</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('philosophy_text_start')}
                                        <span
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className="inline-block text-(--primary-color) hover:text-(--accent-redesigned) transition-all duration-300 font-bold cursor-pointer underline decoration-dotted underline-offset-4"
                                        >
                                            {t('alpha_name')} 🐕
                                        </span>
                                        {t('philosophy_text_end')}
                                    </p>
                                </VStack>
                            </VStack>

                            {/* GitHub ссылка */}
                            <div className="w-full h-10">
                                <HStack justify="start" align="center" className="w-full gap-4">
                                    <HStack gap="8" align="center">
                                        <span className="text-(--primary-color) font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm text-gray-400">{t('my_projects')}</span>
                                    </HStack>
                                    <Link
                                        href="https://github.com/Grisha55"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 py-3 bg-(--primary-color)/10 border border-(--primary-color) rounded-lg hover:bg-(--primary-color)/20 transition-all duration-300 hover:scale-105"
                                        style={{ paddingLeft: '24px', paddingRight: '24px' }}
                                    >
                                        <span className="text-2xl">🐙</span>
                                        <VStack className="flex-1">
                                            <span className="text-(--primary-color) font-bold font-mono text-sm text-center">[ GitHub ]</span>
                                            <span className="font-mono text-xs text-center text-gray-500">github.com/Grisha55</span>
                                        </VStack>
                                        <span className="text-(--primary-color) opacity-0 group-hover:opacity-100 transition">→</span>
                                    </Link>
                                </HStack>
                            </div>

                            {/* Статус бар */}
                            <StatusBar
                                user="user@resume"
                                path="~/about"
                                rightItems={[
                                    { icon: '📁', label: 'sections', value: 6 },
                                    { icon: '📊', label: 'coverage', value: '100%' }
                                ]}
                            />
                        </VStack>
                    </TerminalWindow>
                </VStack>
            </Container>

            {/* Модальное окно для Альфы с обработкой наведения */}
            {isModalOpen && (
                <div
                    onMouseEnter={handleModalMouseEnter}
                    onMouseLeave={handleModalMouseLeave}
                >
                    <HackerModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="ALPHA_SYSTEM"
                        content={`${t('easter_found')} 🐕 ${t('go_to_alpha')}`}
                        showButtons={true}
                        confirmText={t('go_to')}
                        cancelText={t('cancel')}
                        onConfirm={() => {
                            setIsModalOpen(false);
                            router.push('/alpha');
                        }}
                    />
                </div>
            )}
        </div>
    );
}