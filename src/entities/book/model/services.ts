import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const booksApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	tagTypes: ['Books'],
	endpoints: builder => ({
		getBooks: builder.query<Book[], void>({
			query: () => '/books',
			providesTags: ['Books']
		}),
		getBookById: builder.query<Book, number>({
			query: id => `/books/${id}`,
			providesTags: (result, error, id) => [{ type: 'Books', id }]
		})
	})
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
