import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { Theme } from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useEffect, useMemo, useState } from 'react';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: React.ReactNode;
}

export default function ThemeProvider({
	initialTheme,
	children
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		// Эта проверка нужна для SSR
		if (typeof window === 'undefined') {
			return initialTheme || Theme.LIGHT;
		}

		const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
		if (stored && Object.values(Theme).includes(stored)) {
			return stored;
		}
		return initialTheme || Theme.LIGHT;
	});

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
	}, [theme]);

	const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
