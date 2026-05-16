'use client';

import { HStack, VStack } from '@/src/shared/ui/Stack';
import { ToggleFeatures } from '@/src/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { NavLink } from '@/src/shared/ui/NavLink';
import { Text } from '@/src/shared/ui/Text';
import { ThemeSwitcher } from '@/src/features/ThemeSwitcher';
import { LangSwitcher } from '@/src/features/LangSwitcher';
import { memo, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
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
    { href: '/', label: 'Главная', exact: true },
    { href: '/about', label: 'Обо мне', exact: false },
    { href: '/projects', label: 'Проекты', exact: false },
    { href: '/contacts', label: 'Контакты', exact: false }
];

export const Header = memo(({ className = '', logo, siteName = 'My Resume' }: HeaderProps) => {
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
                    {/* Логотип слева */}
                    <Link href="/" onClick={closeMenu}>
                        {logo ? (
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width || 40}
                                height={logo.height || 40}
                                className="rounded-full"
                            />
                        ) : (
                            <span className="text-xl font-bold text-(--primary-color)">
                                {siteName.slice(0, 2)}
                            </span>
                        )}
                    </Link>

                    {/* Десктопная навигация - по центру */}
                    <nav className="absolute hidden transform -translate-x-1/2 md:block left-1/2">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    exact={link.exact}
                                    className="text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                    activeClassName="text-[var(--primary-color)]"
                                    inactiveClassName="text-[var(--text-redesigned)] hover:text-[var(--primary-color)]"
                                >
                                    {link.label}
                                </NavLink>
                            ))}
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
                            <span className={`w-6 h-0.5 bg-(--text-redesigned) transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-6 h-0.5 bg-(--text-redesigned) transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-(--text-redesigned) transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Мобильное меню... (оставляем как было) */}
            <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeMenu} />
            
            <div className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-(--bg-redesigned) shadow-2xl transform transition-transform duration-300 md:hidden border-l border-(--dark-bg-redesigned) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <VStack className="h-full">
                    <HStack justify="between" align="center" className="p-6 border-b border-(--dark-bg-redesigned) w-full">
                        <Text title="Меню" size="m" variant="accent" />
                        <button onClick={closeMenu} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-(--light-bg-redesigned) text-(--text-redesigned)">✕</button>
                    </HStack>
                    
                    <nav className="flex-1 w-full py-6">
                        <VStack gap="16" className="w-full px-6">
                            {navLinks.map((link) => (
                                <NavLink key={link.href} href={link.href} exact={link.exact} onClick={closeMenu} className="w-full py-2 text-lg font-medium transition-colors duration-200" activeClassName="text-[var(--primary-color)]" inactiveClassName="text-[var(--text-redesigned)] hover:text-[var(--primary-color)]">
                                    {link.label}
                                </NavLink>
                            ))}
                        </VStack>
                    </nav>
                    
                    <HStack justify="center" gap="16" className="p-6 border-t border-(--dark-bg-redesigned) w-full">
                        <ThemeSwitcher variant="default" />
                        <LangSwitcher variant="default" />
                    </HStack>
                    
                    <div className="p-6 border-t border-(--dark-bg-redesigned) w-full">
                        <Text text="v1.0.0" size="s" variant="accent" align="center" />
                    </div>
                </VStack>
            </div>
        </header>
    );

    const OldHeader = () => (
        <header className="bg-(--bg-color) shadow-md py-4">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex items-center justify-between">
                    <Text title={siteName} size="m" variant="primary" bold />
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} exact={link.exact} className="text-sm transition-colors duration-200" activeClassName="text-[var(--primary-color)] font-semibold" inactiveClassName="text-[var(--text-redesigned)] hover:text-[var(--primary-color)]">
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
        <ToggleFeatures feature="isAppRedesigned" on={<RedesignedHeader />} off={<OldHeader />} />
    );
});

Header.displayName = 'Header';