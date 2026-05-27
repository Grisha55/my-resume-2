// entities/book/model/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BooksState } from './types';

const initialState: BooksState = {
	items: [],
	selectedBook: null,
	isLoading: false,
	error: null
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<Book[]>) => {
			state.items = action.payload;
		},
		setSelectedBook: (state, action: PayloadAction<Book | null>) => {
			state.selectedBook = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
		clearBooks: state => {
			state.items = [];
			state.selectedBook = null;
			state.error = null;
		}
	}
});

export const { setBooks, setSelectedBook, setLoading, setError, clearBooks } =
	booksSlice.actions;
export default booksSlice.reducer;
