import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
	const lastModified = new Date();

	return [
		// Главная страница
		{
			url: baseUrl,
			lastModified,
			priority: 1.0,
		},
		// Основные страницы
	];
}