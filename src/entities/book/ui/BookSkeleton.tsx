'use client';

interface BookSkeletonProps {
  count?: number;
}

export const BookSkeleton = ({ count = 6 }: BookSkeletonProps) => {
  return (
    <div className="pl-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(count)].map((_, index) => (
          <div 
            key={index} 
            className="border border-(--primary-color)/30 rounded-lg overflow-hidden bg-black/50"
          >
            {/* Изображение-скелетон */}
            <div className="relative w-full h-48 bg-(--skeleton-color) animate-pulse" />
            
            {/* Контент-скелетон */}
            <div className="p-3 space-y-2">
              <div className="h-4 bg-(--skeleton-color) rounded animate-pulse w-3/4" />
              <div className="h-3 bg-(--skeleton-color) rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

BookSkeleton.displayName = 'BookSkeleton';