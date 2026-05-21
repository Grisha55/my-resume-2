'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect/ScanEffect';
import { HStack, VStack } from '@/src/shared/ui/Stack';
import { StatusBar } from '@/src/shared/ui/StatusBar/StatusBar';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import Link from 'next/link';
import { HackerModal } from '@/src/shared/ui/Modal/HackerModal';

export function AboutView() {
    const fullText = '>_ От тенниса — к первой строке кода.';
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAlphaClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div
            className="relative min-h-screen pb-16 bg-black"
            style={{ paddingTop: '100px' }}
        >
            {/* Хакерский фон */}
            <HackerBackground />

            {/* Эффект сканирования */}
            <ScanEffect speed="slow" />

            <Container maxWidth="lg">
                <VStack gap="16" className="w-full">
                    {/* Терминальное окно */}
                    <TerminalWindow
                        title="root@resume:~/about$"
                        subtitle="cat about-me.txt --verbose"
                        headerText={fullText}
                        withPadding={false}
                    >
                        {/* Контент */}
                        <VStack gap="24" className="w-full md:p-8" style={{ padding: '20px' }}>
                            {/* Основной текст */}
                            <VStack gap="24" className="w-full">
                                {/* Блок 1 */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70"># Теннис → Код</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        С 3 лет я шлифовал мастерство в большом теннисе, но травма
                                        плеча изменила планы, открыв новую страницу:
                                        программирование.
                                    </p>
                                </VStack>

                                {/* Блок 2 */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70"># Первый код</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        Уже в 16 лет, самоучкой, я получил первую работу
                                        iOS-разработчиком.
                                    </p>
                                </VStack>

                                {/* Блок 3 */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70"># Почему веб?</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        Создавая приложения, я осознал мощь веба как главного
                                        инструмента для бизнеса и самовыражения, что и определило
                                        мой новый фокус.
                                    </p>
                                </VStack>

                                {/* Блок 4 - с интерактивным словом Альфа */}
                                <VStack gap="8" className="w-full">
                                    <HStack gap="8" align="center" className="text-(--primary-color)">
                                        <span className="font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm opacity-70"># Философия</span>
                                    </HStack>
                                    <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                        Где бы я ни играл — на корте или в цифровом пространстве — я
                                        привык бить точно в цель и побеждать. А ещё у меня есть собака{' '}
                                        <span
                                            onClick={handleAlphaClick}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.textShadow = '0 0 5px var(--primary-color)';
                                                e.currentTarget.style.cursor = 'pointer';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.textShadow = 'none';
                                            }}
                                            className="inline-block text-(--primary-color) hover:text-(--accent-redesigned) transition-all duration-300 font-bold cursor-pointer underline decoration-dotted underline-offset-4"
                                        >
                                            Альфа 🐕
                                        </span>
                                        , которая вдохновляет меня каждый день.
                                    </p>
                                </VStack>
                            </VStack>

                            {/* GitHub ссылка */}
                            <div className="w-full h-10">
                                <HStack justify="start" align="center" className="w-full gap-4">
                                    <HStack gap="8" align="center">
                                        <span className="text-(--primary-color) font-mono text-sm">$&gt;</span>
                                        <span className="font-mono text-sm text-gray-400">Мои проекты здесь:</span>
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

            {/* Модальное окно для Альфы */}
            <HackerModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="ALPHA_SYSTEM"
                content="Ты нашёл пасхалку! 🐕 Перейти на страницу Альфы?"
            />

            {/* Кастомное модальное окно с кнопками */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-1000">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />
                    
                    {/* Модальное окно */}
                    <div className="relative bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] p-6 max-w-md w-full mx-4 z-1001">
                        {/* ASCII заголовок */}
                        <div className="text-center">
                            <div className="text-(--primary-color) font-mono text-sm">
                                {`> ALPHA_SYSTEM`}
                            </div>
                            <div className="h-px bg-linear-to-r from-transparent via-(--primary-color) to-transparent my-2" />
                        </div>
                        
                        {/* Контент */}
                        <div className="text-(--text-redesigned) font-mono text-sm space-y-4 my-4">
                            <p className="text-center">
                                Ты нашёл пасхалку! 🐕
                            </p>
                            <p className="text-center text-gray-400">
                                Хочешь узнать больше о моей собаке Альфе?
                            </p>
                        </div>
                        
                        {/* Кнопки */}
                        <div className="flex gap-3 pt-4 border-t border-(--primary-color)/30">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    router.push('/alpha');
                                }}
                                className="flex-1 py-2 bg-(--primary-color) text-black rounded-lg font-mono text-sm hover:opacity-90 transition"
                            >
                                $&gt; Перейти
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 py-2 border border-(--primary-color) text-(--primary-color) rounded-lg font-mono text-sm hover:bg-(--primary-color)/10 transition"
                            >
                                $&gt; Отмена
                            </button>
                        </div>
                        
                        {/* Терминальная строка */}
                        <div className="flex items-center gap-2 pt-3 mt-2 border-t border-(--primary-color)/30">
                            <span className="text-(--primary-color) text-xs">$&gt;</span>
                            <span className="text-(--text-redesigned) text-xs opacity-70">
                                press ESC to close_
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}