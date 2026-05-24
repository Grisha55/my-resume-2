export enum AppRoutes {
	ABOUT = 'about',
	COMPUTERS = 'computers',
	TENNIS = 'tennis',
	ALPHA = 'alpha',
	BOOKS = 'books',
}

export const getRouteAbout = () => '/';
export const getRouteComputers = () => '/computers';
export const getRouteTennis = () => '/tennis';
export const getRouteAlpha = () => '/alpha';
export const getRouteBooks = () => '/books';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteAbout()]: AppRoutes.ABOUT,
	[getRouteComputers()]: AppRoutes.COMPUTERS,
	[getRouteTennis()]: AppRoutes.TENNIS,
	[getRouteAlpha()]: AppRoutes.ALPHA,
	[getRouteBooks()]: AppRoutes.BOOKS,
}