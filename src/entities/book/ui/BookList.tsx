'use client';

import { Book } from '../model/types';
import { BookCard } from './BookCard';

interface BookListProps {
  books: Book[];
  onBookClick?: (book: Book) => void;
  onBookHover?: (book: Book) => void;
}

export const BookList = ({ books, onBookClick, onBookHover }: BookListProps) => {
  return (
    <div className="pl-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => onBookClick?.(book)}
            onHover={() => onBookHover?.(book)}
          />
        ))}
      </div>
    </div>
  );
};