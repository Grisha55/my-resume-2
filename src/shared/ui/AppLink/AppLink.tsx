import { LinkProps } from 'next/link';
import { memo, ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children: ReactNode;
	activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		variant = 'primary',
		children,
		activeClassName,
		...otherProps
	} = props;

	return (
		<NavLink>
			
		</NavLink>
	)
})

AppLink.displayName = 'AppLink';