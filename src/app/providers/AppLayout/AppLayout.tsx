interface AppLayoutProps {
	header: React.ReactNode;
	footer: React.ReactNode;
	children: React.ReactNode;
}

export function AppLayout({header, footer, children}: AppLayoutProps) {
	return (
		<div>
			{header}
			{children}
			{footer}
		</div>
	)
};