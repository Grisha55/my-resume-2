// app/[locale]/not-found.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Анимированный матричный фон - исправлено */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
                <div 
                    className="absolute inset-0 bg-repeat opacity-10 animate-[matrix_20s_linear_infinite]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%2300ff41' font-family='monospace' font-size='14'%3E01%3C/text%3E%3C/svg%3E")`
                    }}
                />
            </div>

            {/* Терминальное окно */}
            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-2xl bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] backdrop-blur-sm">
                    
                    {/* Заголовок терминала */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-(--primary-color)/30 bg-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-(--primary-color) text-xs font-mono">
                            root@error:~$
                        </span>
                        <div className="w-16" />
                    </div>

                    {/* Контент терминала */}
                    <div className="p-6 md:p-8 font-mono">
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
                        <div className="space-y-3 text-sm md:text-base mb-8">
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
                            <p className="text-yellow-500 mt-4">
                                ⚠ Система безопасности: Ваш IP адрес был залогирован
                            </p>
                        </div>

                        {/* Терминальная строка ввода */}
                        <div className="border-t border-(--primary-color)/30 pt-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-(--primary-color)">$&gt;</span>
                                        <span className="text-gray-300">automatic_redirect.exe --countdown={countdown}</span>
                                        <span className="animate-blink">_</span>
                                    </div>
                                    <div className="w-full bg-black/50 h-1 mt-2 rounded-full overflow-hidden">
                                        <div 
                                            className="bg-(--primary-color) h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${(countdown / 10) * 100}%` }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex gap-3 justify-center md:justify-end">
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
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-(--primary-color) shadow-[0_0_10px_var(--primary-color)] animate-scan" />
            </div>
        </div>
    );
}