import { AppRoutes, getRouteMain } from '@/src/shared/consts/router';
import { ComponentType } from 'react';

export interface NextRouteConfig {
	path: string;
	component: ComponentType;
	roles?: string[];
}

export const routeConfig: Record<AppRoutes, NextRouteConfig> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		// need to do pages
	}
}