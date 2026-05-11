import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { memo, useCallback, useEffect, useState } from 'react';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import { Theme } from '@/shared/consts/theme';

interface ThemeSwitcherProps {
    className?: string;
    variant?: 'default' | 'minimal' | 'with-text';
}

export const ThemeSwitcher = memo(({ 
    className = '', 
    variant = 'default' 
}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
			console.log(newTheme);
        });
    }, [toggleTheme]);

    if (!mounted) {
        return null; // Предотвращаем гидратацию
    }

    const isDark = theme === Theme.DARK;

    // Стили в зависимости от варианта
    const getButtonStyles = () => {
        switch (variant) {
            case 'minimal':
                return `
                    p-2 rounded-lg
                    transition-all duration-200
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
                    text-gray-600 dark:text-gray-400
                    hover:text-[var(--primary-color)] dark:hover:text-[var(--primary-color)]
                `;
            
            case 'with-text':
                return `
                    px-4 py-2 rounded-lg
                    flex items-center gap-3
                    transition-all duration-200
                    bg-[var(--bg-redesigned)]
                    hover:bg-[var(--light-bg-redesigned)]
                    focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
                    text-[var(--text-redesigned)]
                `;
            
            default:
                return `
                    relative p-2 rounded-xl
                    transition-all duration-300
                    bg-[var(--bg-redesigned)]
                    hover:bg-[var(--light-bg-redesigned)]
                    hover:scale-105
                    active:scale-95
                    focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
                    text-[var(--icon-redesigned)]
                    hover:text-[var(--accent-redesigned)]
                    group
                `;
        }
    };

    return (
        <button
            onClick={onToggleHandler}
            className={`${getButtonStyles()} ${className}`}
            aria-label="Переключить тему"
            title={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
        >
            {variant === 'with-text' && (
                <span className="text-sm font-medium">
                    {isDark ? 'Светлая тема' : 'Тёмная тема'}
                </span>
            )}
            
            <div className="relative w-5 h-5">
                {isDark ? (
                    // Иконка солнца для светлой темы
                    <SunIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                ) : (
                    // Иконка луны для тёмной темы
                    <MoonIcon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                )}
            </div>
            
            {variant === 'default' && (
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="absolute inset-0 bg-(--accent-redesigned) blur-xl opacity-20"></span>
                </span>
            )}
        </button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';