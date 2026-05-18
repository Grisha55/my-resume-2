'use client';

import { HStack, VStack } from '@/src/shared/ui/Stack';
import { ToggleFeatures } from '@/src/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { NavLink } from '@/src/shared/ui/NavLink';
import { Text } from '@/src/shared/ui/Text';
import { ThemeSwitcher } from '@/src/features/ThemeSwitcher';
import { LangSwitcher } from '@/src/features/LangSwitcher';
import PhotoIcon from '@/src/shared/assets/images/photo.jpg';
import React, { memo, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { AppImage } from '@/src/shared/ui/AppImage';
import { Skeleton } from '@/src/shared/ui/Skeleton';
import Image from 'next/image';

interface HeaderProps {
	className?: string;
	logo?: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
	siteName?: string;
}

// Навигационные ссылки
const navLinks = [
	{ href: '/', label: '[Главная]', exact: true },
	{ href: '/computers', label: '[Путь_к_вебу]', exact: false },
	{ href: '/projects', label: '[Проекты]', exact: false }
];

export const Header = memo(
	({ className = '', siteName = 'My Resume' }: HeaderProps) => {
		const [isClient, setIsClient] = useState(false);
		const [isMenuOpen, setIsMenuOpen] = useState(false);
		const [scrolled, setScrolled] = useState(false);

		useEffect(() => {
			setIsClient(true);
		}, []);

		useEffect(() => {
			if (!isClient) return;

			const handleScroll = () => {
				setScrolled(window.scrollY > 20);
			};
			window.addEventListener('scroll', handleScroll);
			handleScroll();

			return () => window.removeEventListener('scroll', handleScroll);
		}, [isClient]);

		useEffect(() => {
			if (!isClient) return;

			if (isMenuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
			return () => {
				document.body.style.overflow = 'unset';
			};
		}, [isMenuOpen, isClient]);

		const toggleMenu = useCallback(() => {
			setIsMenuOpen(prev => !prev);
		}, []);

		const closeMenu = useCallback(() => {
			setIsMenuOpen(false);
		}, []);

		// На сервере рендерим заглушку
		if (!isClient) {
			return (
				<header className="fixed top-0 left-0 right-0 z-50 bg-(--bg-redesigned)">
					<div className="max-w-6xl px-4 mx-auto">
						<div className="flex items-center justify-center h-16 md:h-20">
							<span className="text-(--accent-redesigned) font-bold">
								{siteName}
							</span>
						</div>
					</div>
				</header>
			);
		}

		const headerStyles = `
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-[var(--bg-redesigned)] shadow-lg backdrop-blur-sm' : 'bg-[var(--bg-redesigned)]/80 backdrop-blur-sm'}
        ${className}
    `;

		const RedesignedHeader = () => (
			<header className={headerStyles}>
				<div className="max-w-6xl px-4 mx-auto">
					<div className="flex items-center justify-between h-16 md:h-20">
						{/* Логотип слева с эффектом неона */}
						<Link
							href="/"
							onClick={closeMenu}
							className="block group"
						>
							<div className="relative w-13 h-13">
								<Image
									src={PhotoIcon}
									alt="Мое фото"
									fill
									className="rounded-full object-cover transition-all duration-300 group-hover:shadow-[0_0_15px_var(--primary-color)]"
								/>
							</div>
						</Link>

						{/* Десктопная навигация - по центру с хакерским оформлением */}
						<nav className="absolute hidden transform -translate-x-1/2 md:block left-1/2">
							<div className="flex items-center gap-1">
								<span className="text-(--primary-color) opacity-50 text-sm mr-2">
									$&gt;
								</span>
								{navLinks.map((link, index) => (
									<React.Fragment key={link.href}>
										<NavLink
											href={link.href}
											exact={link.exact}
											className={`
                                            relative px-3 py-2 font-mono text-sm font-medium
                                            transition-all duration-300
                                            before:content-['['] before:opacity-0 before:transition-opacity
                                            after:content-[']'] after:opacity-0 after:transition-opacity
                                            hover:before:opacity-100 hover:after:opacity-100
                                            hover:tracking-wider
                                        `}
											activeClassName={`
                                            text-[var(--primary-color)]
                                            before:opacity-100 after:opacity-100
                                            after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                                            after:bg-[var(--primary-color)]
                                            after:shadow-[0_0_8px_var(--primary-color)]
                                            [text-shadow:0_0_5px_var(--primary-color)]
                                        `}
											inactiveClassName="text-[var(--text-redesigned)] hover:text-[var(--primary-color)]"
										>
											{link.label}
										</NavLink>
										{index < navLinks.length - 1 && (
											<span className="text-(--primary-color) opacity-30 text-xs mx-1">
												|
											</span>
										)}
									</React.Fragment>
								))}
								<span className="text-(--primary-color) opacity-50 text-sm ml-2 animate-pulse">
									_
								</span>
							</div>
						</nav>

						{/* Правая панель */}
						<div className="flex items-center gap-4">
							<ThemeSwitcher variant="minimal" />
							<LangSwitcher variant="minimal" />

							{/* Бургер-меню для мобильных */}
							<button
								onClick={toggleMenu}
								className="md:hidden flex flex-col gap-1.5 p-2"
								aria-label="Меню"
								aria-expanded={isMenuOpen}
							>
								<span
									className={`w-6 h-0.5 bg-(--text-redesigned) transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
								/>
								<span
									className={`w-6 h-0.5 bg-(--text-redesigned) transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
								/>
								<span
									className={`w-6 h-0.5 bg-(--text-redesigned) transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
								/>
							</button>
						</div>
					</div>
				</div>

				{/* Мобильное меню */}
				<div
					className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
					onClick={closeMenu}
				/>

				<div
					className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-(--bg-redesigned) shadow-2xl transform transition-transform duration-300 md:hidden border-l border-(--dark-bg-redesigned) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
				>
					<VStack className="h-full">
						<HStack
							justify="between"
							align="center"
							className="p-6 border-b border-(--dark-bg-redesigned) w-full"
						>
							<Text
								title="Меню"
								size="m"
								variant="accent"
							/>
							<button
								onClick={closeMenu}
								className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-(--light-bg-redesigned) text-(--text-redesigned)"
							>
								✕
							</button>
						</HStack>

						<nav className="flex-1 w-full py-6">
							<VStack
								gap="16"
								className="w-full px-6"
							>
								{navLinks.map(link => (
									<NavLink
										key={link.href}
										href={link.href}
										exact={link.exact}
										onClick={closeMenu}
										className="w-full py-2 font-mono text-lg transition-all duration-200 hover:pl-4"
										activeClassName="text-[var(--primary-color)] border-l-4 border-[var(--primary-color)] pl-3"
										inactiveClassName="text-[var(--text-redesigned)] hover:text-[var(--primary-color)]"
									>
										{link.label}
									</NavLink>
								))}
							</VStack>
						</nav>

						<HStack
							justify="center"
							gap="16"
							className="p-6 border-t border-(--dark-bg-redesigned) w-full"
						>
							<ThemeSwitcher variant="default" />
							<LangSwitcher variant="default" />
						</HStack>

						<div className="p-6 border-t border-(--dark-bg-redesigned) w-full">
							<Text
								text="v1.0.0"
								size="s"
								variant="accent"
								align="center"
							/>
						</div>
					</VStack>
				</div>
			</header>
		);

		const OldHeader = () => (
			<header className="bg-(--bg-color) shadow-md py-4">
				<div className="max-w-6xl px-4 mx-auto">
					<div className="flex items-center justify-between">
						<Text
							title={siteName}
							size="m"
							variant="primary"
							bold
						/>
						<div className="flex items-center gap-8">
							{navLinks.map(link => (
								<NavLink
									key={link.href}
									href={link.href}
									exact={link.exact}
									className="relative font-mono text-sm transition-all duration-200 hover:tracking-wider"
									activeClassName="text-[var(--primary-color)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--primary-color)]"
									inactiveClassName="text-[var(--text-redesigned)] hover:text-[var(--primary-color)]"
								>
									{link.label}
								</NavLink>
							))}
						</div>
						<div className="flex items-center gap-4">
							<ThemeSwitcher variant="minimal" />
							<LangSwitcher variant="minimal" />
						</div>
					</div>
				</div>
			</header>
		);

		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				on={<RedesignedHeader />}
				off={<OldHeader />}
			/>
		);
	}
);

Header.displayName = 'Header';
