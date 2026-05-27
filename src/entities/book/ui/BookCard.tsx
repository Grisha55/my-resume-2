'use client';

import { Book } from '../model/types';

interface BookCardProps {
  book: Book;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
}

export const BookCard = ({ book, onHover, onLeave, onClick }: BookCardProps) => {
  const getImageUrl = (imagePath: string) => `http://localhost:8000${imagePath}`;

  return (
    <div 
      className="group/book border border-(--primary-color)/30 rounded-lg overflow-hidden hover:border-(--primary-color) transition-all duration-300 hover:scale-[1.02] bg-black/50 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative w-full h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageUrl(book.image)}
          alt={book.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover/book:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold text-(--primary-color) font-mono">
          [{book.title}]
        </h3>
        <cite className="font-mono text-xs text-gray-400">{book.author}</cite>
      </div>
    </div>
  );
};