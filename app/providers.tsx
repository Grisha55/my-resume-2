import ErrorBoundary from '@/app/providers/ErrorBoundary/ErrorBoundary';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { StrictMode } from 'react';

interface ProvidersProps {
	children: React.ReactNode;
	// Добавить UserAuthData
	// initialUser?: UserAuthData | null;
}

// Подключить ThemeProvider
export function Providers({ children }: ProvidersProps) {
	return (
		<StrictMode>
			<ErrorBoundary>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</ErrorBoundary>
		</StrictMode>
	);
}
