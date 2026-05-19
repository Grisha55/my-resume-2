'use client';

import { useState } from 'react';
import { Container } from '@/src/shared/ui/Container';
import { VStack } from '@/src/shared/ui/Stack';

interface Project {
    id: number;
    title: string;
    description: string;
    githubUrl: string;
    tech?: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: 'EstablishmentsApp',
        description: 'Приложение для поиска ресторанов поблизости.',
        githubUrl: 'https://github.com/Grisha55/EstablishmentsApp',
        tech: ['Swift', 'UIKit', 'CoreLocation'],
    },
    {
        id: 2,
        title: 'IOSInterviewApplication',
        description: 'Приложение для помощи в подготовке к собеседованиям.',
        githubUrl: 'https://github.com/Grisha55/IOSInterviewApplication',
        tech: ['Swift', 'SwiftUI', 'CoreData'],
    },
    {
        id: 3,
        title: 'VK_GeekBrains',
        description: 'Приложение, использующее API ВКонтакте, клонируя данные пользователя.',
        githubUrl: 'https://github.com/Grisha55/VK_GeekBrains',
        tech: ['Swift', 'VK API', 'SDK'],
    },
    {
        id: 4,
        title: 'zen',
        description: 'Приложение для интернет-магазина.',
        githubUrl: 'https://github.com/Grisha55/frontend-journey',
        tech: ['React', 'Redux', 'Tailwind'],
    },
    {
        id: 5,
        title: 'SmartStuffApp',
        description: 'Приложение для управления технических "Умных" вещей (робот-пылесос, ночники).',
        githubUrl: 'https://github.com/Grisha55/SmartStuffApp',
        tech: ['Flutter', 'IoT', 'BLE'],
    },
];

export const ProjectsView = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/grishavinyar64@gmail.com', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 3000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 3000);
            }
        } catch {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
        }
    };

    return (
        <div className="relative min-h-screen bg-black">
            {/* Хакерский фон */}
            <div className="fixed inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
                <div
                    className="absolute inset-0 bg-repeat"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%2300ff41' font-family='monospace' font-size='12'%3E01%3C/text%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            {/* Эффект сканирования */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-(--primary-color) shadow-[0_0_10px_var(--primary-color)] animate-scan" />
            </div>

            {/* Контент с отступами */}
            <div className="pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <Container maxWidth="lg">
                    {/* Терминальное окно */}
                    <div className="bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] backdrop-blur-sm overflow-hidden w-full" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        
                        {/* Заголовок терминала */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-(--primary-color)/30 bg-black/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                            </div>
                            <span className="text-(--primary-color) text-xs font-mono">
                                root@resume:~/projects$
                            </span>
                            <div className="w-16" />
                        </div>

                        {/* Контент */}
                        <div className="p-6 md:p-8">
                            {/* Заголовок */}
                            <div className="mb-8">
                                <h1 className="text-2xl md:text-3xl text-(--primary-color) font-bold font-mono">
                                    &gt;_ Проекты!
                                </h1>
                                <div className="mt-2 font-mono text-sm text-gray-500">
                                    <span className="text-(--primary-color)">$</span> ls -la /projects --details
                                </div>
                            </div>

                            {/* Описание */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                    <span className="font-mono text-sm">$&gt;</span>
                                    <span className="font-mono text-sm opacity-70"># Список проектов</span>
                                </div>
                                <p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-300 font-mono text-sm leading-relaxed">
                                    Вот неполный и неупорядоченный список проектов, над которыми я работал:
                                </p>
                            </div>

                            {/* Список проектов */}
                            <VStack gap="16" className="w-full mb-12">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="transition-all duration-300 group hover:translate-x-2"
                                    >
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 text-(--primary-color) mb-1">
                                                <span className="font-mono text-sm">{index + 1}.</span>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-base font-bold hover:text-(--accent-redesigned) transition-colors"
                                                >
                                                    [{project.title}]
                                                </a>
                                                <span className="ml-auto text-xs text-gray-400 transition-opacity opacity-0 group-hover:opacity-100">
                                                    github.com →
                                                </span>
                                            </div>
                                            <p className="pl-6 font-mono text-sm text-gray-300">
                                                {project.description}
                                            </p>
                                            {project.tech && (
                                                <div className="flex flex-wrap gap-2 pl-6 mt-2">
                                                    {project.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs font-mono text-(--primary-color)/60 border border-(--primary-color)/20 rounded px-2 py-0.5"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </VStack>

                            {/* ASCII Art - Терминал */}
                            <div className="my-8 text-center">
                                <pre className="text-(--primary-color) text-xs opacity-40 select-none">
{`    ╔══════════════════════════════════════════════════════╗
    ║  GIT  │  COMMIT  │  PUSH  │  PULL  │  DEPLOY        ║
    ╠══════════════════════════════════════════════════════╣
    ║  ✓ EstablishmentsApp                                 ║
    ║  ✓ IOSInterviewApplication                           ║
    ║  ✓ VK_GeekBrains                                     ║
    ║  ✓ frontend-journey (zen)                            ║
    ║  ✓ SmartStuffApp                                     ║
    ╚══════════════════════════════════════════════════════╝`}
                                </pre>
                            </div>

                            {/* Форма связи */}
                            <div className="mt-12 pt-6 border-t border-(--primary-color)/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-(--primary-color) font-mono text-sm">$&gt;</span>
                                    <span className="font-mono text-sm text-gray-400">Для связи со мной:</span>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    action="https://formsubmit.co/grishavinyar64@gmail.com"
                                    method="POST"
                                    className="max-w-md mx-auto space-y-4"
                                >
                                    {/* Скрытые поля */}
                                    <input type="hidden" name="_subject" value="Новое сообщение с сайта!" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value="https://Grisha55.github.io/my-resume/success.html" />
                                    <input type="text" name="_honey" style={{ display: 'none' }} />

                                    {/* Поле Имя */}
                                    <div className="group">
                                        <label className="block mb-1 font-mono text-sm text-gray-400">
                                            <span className="text-(--primary-color)">$&gt;</span> Имя:
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 bg-black/50 border border-(--primary-color)/30 rounded-lg font-mono text-sm text-gray-300 focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all"
                                        />
                                    </div>

                                    {/* Поле Email */}
                                    <div className="group">
                                        <label className="block mb-1 font-mono text-sm text-gray-400">
                                            <span className="text-(--primary-color)">$&gt;</span> Email:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 bg-black/50 border border-(--primary-color)/30 rounded-lg font-mono text-sm text-gray-300 focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all"
                                        />
                                    </div>

                                    {/* Поле Сообщение */}
                                    <div className="group">
                                        <label className="block mb-1 font-mono text-sm text-gray-400">
                                            <span className="text-(--primary-color)">$&gt;</span> Сообщение:
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className="w-full px-4 py-2 bg-black/50 border border-(--primary-color)/30 rounded-lg font-mono text-sm text-gray-300 focus:outline-none focus:border-(--primary-color) focus:ring-1 focus:ring-(--primary-color) transition-all resize-none"
                                        />
                                    </div>

                                    {/* Кнопка отправки */}
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-(--primary-color)/10 border border-(--primary-color) rounded-lg font-mono text-sm text-(--primary-color) hover:bg-(--primary-color)/20 transition-all duration-300 group"
                                    >
                                        <span className="transition-all group-hover:mr-2">$&gt; Отправить</span>
                                        <span className="transition-all opacity-0 group-hover:opacity-100">_</span>
                                    </button>

                                    {/* Статус сообщения */}
                                    {formStatus === 'success' && (
                                        <div className="py-2 font-mono text-sm text-center text-green-500 border border-green-500 rounded-lg bg-green-500/20">
                                            ✓ Сообщение отправлено!
                                        </div>
                                    )}
                                    {formStatus === 'error' && (
                                        <div className="py-2 font-mono text-sm text-center text-red-500 border border-red-500 rounded-lg bg-red-500/20">
                                            ✗ Ошибка отправки. Попробуйте позже.
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* Статус бар */}
                            <div className="mt-8 pt-3 border-t border-(--primary-color)/30 text-xs text-gray-500 font-mono flex flex-wrap justify-between gap-2">
                                <div className="flex gap-4">
                                    <span>user@resume:~/projects$</span>
                                    <span className="text-(--primary-color)">● ONLINE</span>
                                </div>
                                <div className="flex gap-2">
                                    <span>📦 projects: {projects.length}</span>
                                    <span>🐙 github: connected</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Терминальная строка */}
                    <div className="mt-6 font-mono text-xs text-center text-gray-600 select-none">
                        <span className="animate-pulse">
                            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ DEPLOY:SUCCESS ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                        </span>
                    </div>
                </Container>
            </div>
        </div>
    );
};

ProjectsView.displayName = 'ProjectsView';