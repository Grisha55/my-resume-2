import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale) {
		locale = 'ru';
	}

	try {
		return {
			locale,
			messages: {
				...(await import(`./locales/${locale}/common.json`)).default,
				...(await import(`./locales/${locale}/aboutPage.json`)).default,
				...(await import(`./locales/${locale}/alphaPage.json`)).default,
				...(await import(`./locales/${locale}/booksPage.json`)).default,
				...(await import(`./locales/${locale}/computersPage.json`)).default,
				...(await import(`./locales/${locale}/projectsPage.json`)).default,
				...(await import(`./locales/${locale}/notFoundPage.json`)).default
			}
		};
	} catch (error) {
		// Если файл не найден, загружаем только common.json
		console.warn(
			`Could not load aboutPage.json for locale ${locale}, using fallback`
		);
		return {
			locale,
			messages: (await import(`./locales/${locale}/common.json`)).default
		};
	}
});
