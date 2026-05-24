const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Типы для ответов API
export interface UploadedFile {
	id: number;
	originalName: string;
	filename: string;
	url: string;
	size: number;
	uploadedAt: string;
}

export interface ImageUploadResponse {
	success: boolean;
	file: UploadedFile;
}

export interface SectionImages {
	section: string;
	images: Array<{ url: string; filename: string }>;
}

// Тип для данных секции (обобщённый)
export type SectionData = Record<string, unknown>;

// Тип для секции hero
export interface HeroSectionData {
	title: string;
	subtitle: string;
	backgroundImage: string;
	avatar: string;
}

// Тип для секции about
export interface AboutSectionData {
	title: string;
	description: string;
	image: string;
}

// Тип для проекта
export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	github: string;
	demo?: string;
}

// Тип для навыка
export interface Skill {
	name: string;
	level: number;
	icon: string;
}

// Тип для сертификата
export interface Certificate {
	id: number;
	title: string;
	image: string;
	date: string;
}

// Тип для книги
export interface Book {
	id: number;
	title: string;
	author: string;
	image: string;
	description?: string;
}

export const imageApi = {
	// Загрузка изображения
	upload: async (file: File): Promise<ImageUploadResponse> => {
		const formData = new FormData();
		formData.append('image', file);

		const response = await fetch(`${API_URL}/upload`, {
			method: 'POST',
			body: formData
		});

		if (!response.ok) throw new Error('Upload failed');
		return response.json();
	},

	// Получение изображений секции
	getSectionImages: async (section: string): Promise<SectionImages> => {
		const response = await fetch(`${API_URL}/sections/${section}/images`);
		if (!response.ok) throw new Error('Failed to fetch images');
		return response.json();
	},

	// Получение всех данных секций
	getSections: async (): Promise<Record<string, unknown>> => {
		const response = await fetch(`${API_URL}/sections`);
		if (!response.ok) throw new Error('Failed to fetch sections');
		return response.json();
	},

	// Получение конкретной секции
	getSection: async <T = Record<string, unknown>>(
		section: string
	): Promise<T> => {
		const response = await fetch(`${API_URL}/sections/${section}`);
		if (!response.ok) throw new Error(`Failed to fetch section: ${section}`);
		return response.json();
	},

	// Обновление данных секции
	updateSection: async <T = Record<string, unknown>>(
		section: string,
		data: Partial<T>
	): Promise<T> => {
		const response = await fetch(`${API_URL}/sections/${section}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});

		if (!response.ok) throw new Error('Failed to update section');
		return response.json();
	},

	// Получение проектов
	getProjects: async (): Promise<Project[]> => {
		const response = await fetch(`${API_URL}/sections/projects`);
		if (!response.ok) throw new Error('Failed to fetch projects');
		const data = await response.json();
		return data as Project[];
	},

	// Получение навыков
	getSkills: async (): Promise<Skill[]> => {
		const response = await fetch(`${API_URL}/sections/skills/items`);
		if (!response.ok) throw new Error('Failed to fetch skills');
		const data = await response.json();
		return data as Skill[];
	},

	// Получение сертификатов
	getCertificates: async (): Promise<Certificate[]> => {
		const response = await fetch(`${API_URL}/sections/certificates`);
		if (!response.ok) throw new Error('Failed to fetch certificates');
		return response.json();
	},

	// Получение книг - теперь используем /books (не /sections/books)
	getBooks: async (): Promise<Book[]> => {
		const response = await fetch(`${API_URL}/books`);
		if (!response.ok) throw new Error('Failed to fetch books');
		const data = await response.json();
		return data as Book[];
	},

	// Получение конкретной книги по id
	getBookById: async (id: number): Promise<Book> => {
		const response = await fetch(`${API_URL}/books/${id}`);
		if (!response.ok) throw new Error(`Failed to fetch book with id: ${id}`);
		return response.json();
	}
};
