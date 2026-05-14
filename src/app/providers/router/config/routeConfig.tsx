import AlphaPage from '@/app/[locale]/alpha/page';
import BooksPage from '@/app/[locale]/books/page';
import ComputersPage from '@/app/[locale]/computers/page';
import AboutPage from '@/app/[locale]/page';
import TennisPage from '@/app/[locale]/tennis/page';
import { AppRoutes } from '@/src/shared/consts/router';
import { ComponentType } from 'react';

export interface NextRouteConfig {
	path: string;
	component: ComponentType;
	roles?: string[];
}

export const routeConfig: Record<AppRoutes, NextRouteConfig> = {
	[AppRoutes.ABOUT]: {
		path: '/',
		component: AboutPage
	},
	[AppRoutes.TENNIS]: {
		path: '/tennis',
		component: TennisPage
	},
	[AppRoutes.ALPHA]: {
		path: '/alpha',
		component: AlphaPage
	},
	[AppRoutes.BOOKS]: {
		path: '/books',
		component: BooksPage
	},
	[AppRoutes.COMPUTERS]: {
		path: '/computers',
		component: ComputersPage
	}
}