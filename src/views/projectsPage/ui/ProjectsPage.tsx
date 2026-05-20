'use client';

import { useState } from 'react';
import { Container } from '@/src/shared/ui/Container';
import { VStack } from '@/src/shared/ui/Stack';
import { ContactForm } from '@/src/shared/ui/ContactForm/ContactForm';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect';
import { TerminalLine } from '@/src/shared/ui/TerminalLine';

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
		tech: ['Swift', 'UIKit', 'CoreLocation']
	},
	{
		id: 2,
		title: 'IOSInterviewApplication',
		description: 'Приложение для помощи в подготовке к собеседованиям.',
		githubUrl: 'https://github.com/Grisha55/IOSInterviewApplication',
		tech: ['Swift', 'SwiftUI', 'CoreData']
	},
	{
		id: 3,
		title: 'VK_GeekBrains',
		description:
			'Приложение, использующее API ВКонтакте, клонируя данные пользователя.',
		githubUrl: 'https://github.com/Grisha55/VK_GeekBrains',
		tech: ['Swift', 'VK API', 'SDK']
	},
	{
		id: 4,
		title: 'zen',
		description: 'Приложение для интернет-магазина.',
		githubUrl: 'https://github.com/Grisha55/frontend-journey',
		tech: ['React', 'Redux', 'Tailwind']
	},
	{
		id: 5,
		title: 'SmartStuffApp',
		description:
			'Приложение для управления технических "Умных" вещей (робот-пылесос, ночники).',
		githubUrl: 'https://github.com/Grisha55/SmartStuffApp',
		tech: ['Flutter', 'IoT', 'BLE']
	}
];

export const ProjectsView = () => {

	return (
		<div className="relative min-h-screen bg-black">
			{/* Хакерский фон */}
			<HackerBackground />

			{/* Эффект сканирования */}
			<ScanEffect speed="slow" />

			{/* Контент с отступами */}
			<div
				className="pb-16"
				style={{ paddingTop: '100px', paddingBottom: '100px' }}
			>
				<Container maxWidth="lg">
					{/* Терминальное окно */}
					<div
						className="bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] backdrop-blur-sm overflow-hidden w-full"
						style={{ paddingLeft: '20px', paddingRight: '20px' }}
					>
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
									<span className="text-(--primary-color)">$</span> ls -la
									/projects --details
								</div>
							</div>
							{/* Описание */}
							<div className="mb-8">
								<div className="flex items-center gap-2 text-(--primary-color) mb-2">
									<span className="font-mono text-sm">$&gt;</span>
									<span className="font-mono text-sm opacity-70">
										# Список проектов
									</span>
								</div>
								<p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-300 font-mono text-sm leading-relaxed">
									Вот неполный и неупорядоченный список проектов, над которыми я
									работал:
								</p>
							</div>
							{/* Список проектов */}
							<VStack
								gap="16"
								className="w-full mb-12"
							>
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
													{project.tech.map(tech => (
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
							<ContactForm
								title="Для связи со мной:"
								email="grishavinyar64@gmail.com"
								submitText="Отправить"
								successMessage="✓ Сообщение отправлено!"
								errorMessage="✗ Ошибка отправки. Попробуйте позже."
							/>
							Ы{/* Статус бар */}
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
					<TerminalLine text="DEPLOY:SUCCESS" />
				</Container>
			</div>
		</div>
	);
};

ProjectsView.displayName = 'ProjectsView';
