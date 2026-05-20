'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container } from '@/src/shared/ui/Container';
import { HStack, VStack } from '@/src/shared/ui/Stack';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect/ScanEffect';
import { TerminalLine } from '@/src/shared/ui/TerminalLine';

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
			className="relative min-h-screen pb-16 bg-black"
			style={{ paddingTop: '100px' }}
		>
			{/* Хакерский фон */}
			<HackerBackground />

			{/* Эффект сканирования */}
			<ScanEffect speed="slow" />

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
									<div className="w-3 h-3 bg-red-500 rounded-full" />
									<div className="w-3 h-3 bg-yellow-500 rounded-full" />
									<div className="w-3 h-3 bg-green-500 rounded-full" />
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
							className="w-full md:p-8"
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
									<span className="font-mono text-sm text-gray-500">
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
										<span className="font-mono text-sm">$&gt;</span>
										<span className="font-mono text-sm opacity-70">
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
										<span className="font-mono text-sm">$&gt;</span>
										<span className="font-mono text-sm opacity-70">
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
										<span className="font-mono text-sm">$&gt;</span>
										<span className="font-mono text-sm opacity-70">
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
										<span className="font-mono text-sm">$&gt;</span>
										<span className="font-mono text-sm opacity-70">
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
										<span className="font-mono text-sm text-gray-400">
											Мои проекты здесь:
										</span>
									</HStack>
									<Link
										href="https://github.com/Grisha55"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-4 py-3 bg-(--primary-color)/10 border border-(--primary-color) rounded-lg hover:bg-(--primary-color)/20 transition-all duration-300 hover:scale-105"
										style={{ paddingLeft: '24px', paddingRight: '24px' }}
									>
										<span className="text-2xl">🐙</span>
										<VStack
											className="flex-1"
										>
											<span className="text-(--primary-color) font-bold font-mono text-sm text-center">
												[ GitHub ]
											</span>
											<span className="font-mono text-xs text-center text-gray-500">
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
									<span className="font-mono text-xs text-gray-500">
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
									<span className="font-mono text-xs text-gray-500">
										📁 sections: 6
									</span>
									<span className="font-mono text-xs text-gray-500">
										📊 coverage: 100%
									</span>
								</HStack>
							</div>
						</VStack>
					</div>

					{/* Терминальная строка */}
					<TerminalLine text="READY" />
				</VStack>
			</Container>
		</div>
	);
}
