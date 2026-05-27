import { RootState } from '@/src/app/providers/StoreProvider/config/store';
import { Book } from './types';

export const selectAllBooks = (state: RootState) => state.books.items;
export const selectBooksLoading = (state: RootState) => state.books.isLoading;
export const selectBooksError = (state: RootState) => state.books.error;
export const selectBookById = (state: RootState, id: number) =>
  state.books.items.find((book: Book) => book.id === id);