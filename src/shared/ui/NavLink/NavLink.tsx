'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, ReactNode } from 'react';

interface NavLinkProps {
	href: string;
	children: ReactNode;
	exact?: boolean; // Флаг для точного совпадения (например для главной страницы)
	className?: string;
	activeClassName?: string;
	inactiveClassName?: string;
	onClick?: () => void;
}

export const NavLink = memo((props: NavLinkProps) => {
	const {
		href,
		children,
		exact,
		className,
		activeClassName,
		inactiveClassName,
		onClick,
		...otherProps
	} = props;

	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	// Формируем итоговый classname
	const finalClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`.trim();

	return (
		<Link href={href} className={finalClassName} onClick={onClick} {...otherProps}>
			{children}
		</Link>
	)
})

NavLink.displayName = 'NavLink';