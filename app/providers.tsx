import ErrorBoundary from '@/src/app/providers/ErrorBoundary/ErrorBoundary';
import StoreProvider from '@/src/app/providers/StoreProvider/ui/StoreProvider';
import ThemeProvider from '@/src/app/providers/ThemeProvider/ui/ThemeProvider';
import { StrictMode } from 'react';

interface ProvidersProps {
	children: React.ReactNode;
}

// Подключить ThemeProvider
export function Providers({ children }: ProvidersProps) {
	return (
		<StrictMode>
			<ErrorBoundary>
				<StoreProvider>
					<ThemeProvider>
						{children}
					</ThemeProvider>
				</StoreProvider>
			</ErrorBoundary>
		</StrictMode>
	);
}
