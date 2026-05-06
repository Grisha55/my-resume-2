import { StrictMode } from 'react';

interface ProvidersProps {
	children: React.ReactNode;
	// Добавить UserAuthData
	// initialUser?: UserAuthData | null;
}

// Подключить ThemeProvider
export function Providers({ children }: ProvidersProps) {
	return <StrictMode>{children}</StrictMode>;
}
