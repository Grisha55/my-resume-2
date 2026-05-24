'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect/ScanEffect';
import { VStack } from '@/src/shared/ui/Stack';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import { HackerModal } from '@/src/shared/ui/Modal/HackerModal';
import Image from 'next/image';
import Link from 'next/link';

export const ComputersView = () => {
    const router = useRouter();
    const [isBooksModalOpen, setIsBooksModalOpen] = useState(false);
    const t = useTranslations();

    const fullText = t('computers_header');

    const handleBooksClick = () => {
        setIsBooksModalOpen(true);
    };

    const goToBooks = () => {
        setIsBooksModalOpen(false);
        router.push('/books');
    };

    return (
        <div className="relative">
            {/* Хакерский фон */}
            <HackerBackground />

            {/* Эффект сканирования */}
            <ScanEffect speed="slow" />

            {/* Контент с отступами */}
            <div className="pt-20 pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <Container maxWidth="lg">
                    {/* Терминальное окно */}
                    <TerminalWindow title={"root@resume:~/computers$"} subtitle="ls -la /computers --details" headerText={fullText} withPadding={false}>

                        {/* Контент */}
                        <div className="p-6 md:p-8">

                            {/* Терминальная строка с кодом - оставляем без перевода (ASCII арт) */}
                            <div className="mb-6 overflow-x-auto">
                                <pre className="text-(--primary-color) text-xs font-mono opacity-60 whitespace-pre">
{`╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗   ██╗████████╗██╗███╗   ██╗ ██████╗ 
║    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║   ██║╚══██╔══╝██║████╗  ██║██╔════╝ 
║    ██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║   ██║   ██║██╔██╗ ██║██║  ███╗
║    ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║   ██║   ██║██║╚██╗██║██║   ██║
║    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝   ██║   ██║██║ ╚████║╚██████╔╝
║     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
║                                                          ║
╚══════════════════════════════════════════════════════════╝`}
                                </pre>
                            </div>

                            {/* Основной текст */}
                            <VStack gap="24" className="w-full">
                                <div className="group">
                                    <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('work_process_title')}</span>
                                    </div>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('work_process_text')}
                                    </p>
                                    <p className="pl-4 mt-3 font-mono text-sm text-gray-400">
                                        <span className="text-(--primary-color)">$&gt;</span> {t('work_process_link_text')}{' '}
                                        <Link href="/projects" className="text-(--primary-color) hover:text-(--accent-redesigned) transition-colors">
                                            {t('work_process_link')}
                                        </Link>
                                        {t('work_process_link_end')}
                                    </p>
                                </div>

                                <div className="group">
                                    <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('tech_stack_title')}</span>
                                    </div>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('tech_stack_text')}
                                    </p>
                                </div>

                                <div className="group">
                                    <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('web_focus_title')}</span>
                                    </div>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('web_focus_text')}
                                    </p>
                                </div>

                                <div className="group">
                                    <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70">{t('community_title')}</span>
                                    </div>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        {t('community_text')}
                                    </p>
                                </div>
                            </VStack>

                            {/* Блок с изображением ноутбука */}
                            <div className="mt-12 pt-6 border-t border-(--primary-color)/30" style={{ paddingTop: '24px' }}>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-(--primary-color) font-mono text-sm">$&gt;</span>
                                    <span className="font-mono text-sm text-gray-400">{t('first_laptop_text')}</span>
                                </div>

                                <div className="relative max-w-md mx-auto group">
                                    <div className="relative rounded-lg overflow-hidden border border-(--primary-color)/30 hover:border-(--primary-color) transition-all duration-300">
                                        <Image
                                            src="/assets/computer.jpg"
                                            alt={t('first_laptop_alt')}
                                            width={400}
                                            height={250}
                                            className="object-cover w-full h-auto"
                                        />
                                    </div>
                                    {/* Эффект луча света */}
                                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                                        <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                                    </div>
                                </div>
                            </div>

                            {/* Ссылка на книги */}
                            <div className="mt-8 pt-6 border-t border-(--primary-color)/30">
                                <div className="flex items-center gap-2">
                                    <span className="text-(--primary-color) font-mono text-sm">$&gt;</span>
                                    <span className="font-mono text-sm text-gray-400">
                                        {t('books_promo_text')}
                                        <button
                                            onClick={handleBooksClick}
                                            className="ml-2 text-(--primary-color) hover:text-(--accent-redesigned) transition-colors underline decoration-dotted underline-offset-4"
                                        >
                                            {t('books_promo_link')}
                                        </button>
                                    </span>
                                </div>
                            </div>

                            {/* ASCII Art - оставляем без перевода */}
                            <div className="mt-8 overflow-x-auto text-center">
                                <pre className="text-(--primary-color) text-xs opacity-40 select-none whitespace-pre">
{`    ╔══════════════════════════════════╗
    ║  ┌────────────────────────────┐  ║
    ║  │                            │  ║
    ║  │       TERMINAL READY       │  ║
    ║  │                            │  ║
    ║  └────────────────────────────┘  ║
    ║    ┌────┐  ┌────┐  ┌────┐       ║
    ║    │Ctrl│  │Alt │  │Cmd │       ║
    ║    └────┘  └────┘  └────┘       ║
    ╚══════════════════════════════════╝`}
                                </pre>
                            </div>

                            {/* Статус бар */}
                            <div className="mt-8 pt-3 border-t border-(--primary-color)/30 text-xs text-gray-500 font-mono flex flex-wrap justify-between gap-2">
                                <div className="flex gap-4">
                                    <span>user@resume:~/computers$</span>
                                    <span className="text-(--primary-color)">● {t('online_status')}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>📁 stack: {t('tech_stack_label')}</span>
                                    <span>🖥️ status: {t('coding_status')}</span>
                                </div>
                            </div>
                        </div>
                    </TerminalWindow>
                </Container>
            </div>

            {/* Модальное окно для книг */}
            <HackerModal
                isOpen={isBooksModalOpen}
                onClose={() => setIsBooksModalOpen(false)}
                title="BOOKS_SYSTEM"
                content={t('books_modal_content')}
                showButtons={true}
                confirmText={t('books_modal_confirm')}
                cancelText={t('books_modal_cancel')}
                onConfirm={goToBooks}
            />
        </div>
    );
};