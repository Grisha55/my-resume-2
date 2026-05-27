// entities/book/model/types.ts
export interface Book {
	id: number;
	title: string;
	author: string;
	image: string;
	description?: string;
}

export interface BooksState {
	items: Book[];
	selectedBook: Book | null;
	isLoading: boolean;
	error: string | null;
}
