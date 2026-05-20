// app/[locale]/not-found.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect';

export function NotFoundView() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);
    const [glitch, setGlitch] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = '>_ ERROR_404: PAGE_NOT_FOUND.exe';

    // Эффект печатающей машинки
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Эффект глитча
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 150);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Таймер обратного отсчёта
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            <HackerBackground />

            {/* Терминальное окно */}
            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-2xl bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] backdrop-blur-sm">
                    
                    {/* Заголовок терминала */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-(--primary-color)/30 bg-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-(--primary-color) text-xs font-mono">
                            root@error:~$
                        </span>
                        <div className="w-16" />
                    </div>

                    {/* Контент терминала */}
                    <div className="p-6 font-mono md:p-8">
                        {/* ASCII Арт - 404 */}
                        <div className={`text-center mb-6 transition-all duration-100 ${glitch ? 'animate-glitch' : ''}`}>
                            <pre className="text-(--primary-color) text-xs md:text-sm select-none">
                                {`
╔═══════════════════════════════════════╗
║                                       ║
║    ██████╗  ██████╗ ██████╗           ║
║    ██╔══██╗██╔═══██╗██╔══██╗          ║
║    ██║  ██║██║   ██║██████╔╝          ║
║    ██║  ██║██║   ██║██╔══██╗          ║
║    ██████╔╝╚██████╔╝██████╔╝          ║
║    ╚═════╝  ╚═════╝ ╚═════╝           ║
║                                       ║
║        ACCESS DENIED                  ║
╚═══════════════════════════════════════╝
                                `}
                            </pre>
                        </div>

                        {/* Печатающаяся строка */}
                        <div className="mb-6">
                            <p className="text-(--primary-color) text-sm md:text-base">
                                {typedText}
                                <span className="animate-blink">█</span>
                            </p>
                        </div>

                        {/* Сообщение об ошибке */}
                        <div className="mb-8 space-y-3 text-sm md:text-base">
                            <p className="text-red-500">
                                ✗ Ошибка: Запрашиваемый ресурс не найден в системе.
                            </p>
                            <p className="text-gray-400">
                                ✗ Возможные причины:
                            </p>
                            <ul className="ml-6 space-y-1 text-gray-400">
                                <li>• Страница была перемещена или удалена</li>
                                <li>• Неверный URL в запросе</li>
                                <li>• Недостаточно прав доступа</li>
                            </ul>
                            <p className="mt-4 text-yellow-500">
                                ⚠ Система безопасности: Ваш IP адрес был залогирован
                            </p>
                        </div>

                        {/* Терминальная строка ввода */}
                        <div className="border-t border-(--primary-color)/30 pt-4">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-(--primary-color)">$&gt;</span>
                                        <span className="text-gray-300">automatic_redirect.exe --countdown={countdown}</span>
                                        <span className="animate-blink">_</span>
                                    </div>
                                    <div className="w-full h-1 mt-2 overflow-hidden rounded-full bg-black/50">
                                        <div 
                                            className="bg-(--primary-color) h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${(countdown / 10) * 100}%` }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-center gap-3 md:justify-end">
                                    <Link
                                        href="/"
                                        className="px-4 py-2 bg-(--primary-color) text-black font-bold rounded hover:scale-105 transition-transform"
                                    >
                                        [ ВЕРНУТЬСЯ ]
                                    </Link>
                                    <button
                                        onClick={() => router.back()}
                                        className="px-4 py-2 border border-(--primary-color) text-(--primary-color) rounded hover:bg-(--primary-color)/10 transition"
                                    >
                                        [ НАЗАД ]
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Статус бар */}
                        <div className="mt-6 pt-3 border-t border-(--primary-color)/30 text-xs text-gray-500 font-mono flex justify-between">
                            <span>system@error:~/not_found$</span>
                            <span className="animate-pulse">● ONLINE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Эффект сканирования */}
            <ScanEffect speed="slow" />
        </div>
    );
}