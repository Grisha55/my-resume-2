export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	COMPUTERS = 'computers',
	TENNIS = 'tennis',
	ALPHA = 'alpha',
	BOOKS = 'books',
	BOOK_DETAILS = 'book_details',
	BOOK_EDIT = 'book_edit',
	// last
	NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteComputers = () => '/computers';
export const getRouteTennis = () => '/tennis';
export const getRouteAlpha = () => '/alpha';
export const getRouteBooks = () => '/books';
export const getRouteBookDetails = (id: string) => `/books/${id}`;
export const getRouteBookEdit = (id: string) => `/books/${id}/edit`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteAbout()]: AppRoutes.ABOUT,
	[getRouteComputers()]: AppRoutes.COMPUTERS,
	[getRouteTennis()]: AppRoutes.TENNIS,
	[getRouteAlpha()]: AppRoutes.ALPHA,
	[getRouteBooks()]: AppRoutes.BOOKS,
}