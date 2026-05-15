// src/views/aboutPage/AboutView.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/src/shared/ui/Container';
import { HStack, VStack } from '@/src/shared/ui/Stack';

export function AboutView() {
	const [typedText, setTypedText] = useState('');
	const [showCursor, setShowCursor] = useState(true);
	const fullText = '>_ От тенниса — к первой строке кода.';

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setTypedText(fullText.slice(0, i));
			i++;
			if (i > fullText.length) clearInterval(interval);
		}, 50);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowCursor(prev => !prev);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="relative min-h-screen bg-black pb-16"
			style={{ paddingTop: '100px' }}
		>
			{/* Хакерский фон */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
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
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-0 left-0 right-0 h-0.5 bg-(--primary-color) shadow-[0_0_10px_var(--primary-color)] animate-scan" />
			</div>

			<Container maxWidth="lg">
				<VStack
					gap="16"
					className="w-full"
				>
					{/* Терминальное окно */}
					<div className="bg-black/90 border-2 border-(--primary-color) rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] backdrop-blur-sm overflow-hidden w-full">
						{/* Заголовок терминала */}
						<HStack
							justify="between"
							align="center"
							className="px-4 py-2 border-b border-(--primary-color)/30 bg-black/50 w-full"
						>
							<HStack
								gap="8"
								align="center"
							>
								<div className="flex gap-2">
									<div className="w-3 h-3 rounded-full bg-red-500" />
									<div className="w-3 h-3 rounded-full bg-yellow-500" />
									<div className="w-3 h-3 rounded-full bg-green-500" />
								</div>
								<span className="text-(--primary-color) text-xs font-mono">
									root@resume:~/about$
								</span>
							</HStack>
							<div className="w-16" />
						</HStack>

						{/* Контент */}
						<VStack
							gap="24"
							className="md:p-8 w-full"
                            style={{ padding: '20px' }}
						>
							{/* Заголовок с анимацией */}
							<VStack
								gap="8"
								className="w-full"
							>
								<h1 className="text-2xl md:text-3xl text-(--primary-color) font-bold font-mono">
									{typedText}
									<span
										className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}
									>
										█
									</span>
								</h1>
								<HStack
									gap="4"
									align="center"
								>
									<span className="text-(--primary-color) font-mono">$</span>
									<span className="text-gray-500 text-sm font-mono">
										cat about.md --verbose
									</span>
								</HStack>
							</VStack>

							{/* Основной текст */}
							<VStack
								gap="24"
								className="w-full"
							>
								{/* Блок 1 */}
								<VStack
									gap="8"
									className="w-full"
								>
									<HStack
										gap="8"
										align="center"
										className="text-(--primary-color)"
									>
										<span className="text-sm font-mono">$&gt;</span>
										<span className="text-sm opacity-70 font-mono">
											# Теннис → Код
										</span>
									</HStack>
									<p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
										С 3 лет я шлифовал мастерство в большом теннисе, но травма
										плеча изменила планы, открыв новую страницу:
										программирование.
									</p>
								</VStack>

								{/* Блок 2 */}
								<VStack
									gap="8"
									className="w-full"
								>
									<HStack
										gap="8"
										align="center"
										className="text-(--primary-color)"
									>
										<span className="text-sm font-mono">$&gt;</span>
										<span className="text-sm opacity-70 font-mono">
											# Первый код
										</span>
									</HStack>
									<p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
										Уже в 16 лет, самоучкой, я получил первую работу
										iOS-разработчиком.
									</p>
								</VStack>

								{/* Блок 3 */}
								<VStack
									gap="8"
									className="w-full"
								>
									<HStack
										gap="8"
										align="center"
										className="text-(--primary-color)"
									>
										<span className="text-sm font-mono">$&gt;</span>
										<span className="text-sm opacity-70 font-mono">
											# Почему веб?
										</span>
									</HStack>
									<p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
										Создавая приложения, я осознал мощь веба как главного
										инструмента для бизнеса и самовыражения, что и определило
										мой новый фокус.
									</p>
								</VStack>

								{/* Блок 4 */}
								<VStack
									gap="8"
									className="w-full"
								>
									<HStack
										gap="8"
										align="center"
										className="text-(--primary-color)"
									>
										<span className="text-sm font-mono">$&gt;</span>
										<span className="text-sm opacity-70 font-mono">
											# Философия
										</span>
									</HStack>
									<p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
										Где бы я ни играл — на корте или в цифровом пространстве — я
										привык бить точно в цель и побеждать.
									</p>
								</VStack>
							</VStack>

							{/* GitHub ссылка */}
							<div className="w-full h-10">
								<HStack
									justify="start"
									align="center"
									className="w-full gap-4"
								>
									<HStack
										gap="8"
										align="center"
									>
										<span className="text-(--primary-color) font-mono text-sm">
											$&gt;
										</span>
										<span className="text-gray-400 font-mono text-sm">
											Мои проекты здесь:
										</span>
									</HStack>
									<Link
										href="https://github.com/Grisha55"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-3 px-5 bg-(--primary-color)/10 border border-(--primary-color) rounded-lg hover:bg-(--primary-color)/20 transition-all duration-300 hover:scale-105"
									>
										<span className="text-2xl">🐙</span>
										<VStack gap="4">
											<span className="text-(--primary-color) font-bold font-mono text-sm">
												[ GitHub ]
											</span>
											<span className="text-xs text-gray-500 font-mono">
												github.com/Grisha55
											</span>
										</VStack>
										<span className="text-(--primary-color) opacity-0 group-hover:opacity-100 transition">
											→
										</span>
									</Link>
								</HStack>
							</div>

							{/* Статус бар */}
							<div
								className="flex gap-6 justify-between items-center pt-4 border-t border-(--primary-color)/30 w-full flex-wrap"
                                style={{ paddingTop: '10px' }}
							>
								<HStack
									gap="16"
									align="center"
								>
									<span className="text-gray-500 text-xs font-mono">
										user@resume:~/about$
									</span>
									<span className="text-(--primary-color) text-xs font-mono">
										● ONLINE
									</span>
								</HStack>
								<HStack
									gap="8"
									align="center"
								>
									<span className="text-gray-500 text-xs font-mono">
										📁 sections: 6
									</span>
									<span className="text-gray-500 text-xs font-mono">
										📊 coverage: 100%
									</span>
								</HStack>
							</div>
						</VStack>
					</div>

					{/* Терминальная строка */}
					<div className="text-center w-full">
						<span className="text-xs text-gray-600 font-mono select-none animate-pulse">
							⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ READY ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
						</span>
					</div>
				</VStack>
			</Container>
		</div>
	);
}
