'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { ScanEffect } from '@/src/shared/ui/ScanEffect';
import { StatusBar } from '@/src/shared/ui/StatusBar/StatusBar';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow/TerminalWindow';
import { VStack } from '@/src/shared/ui/Stack';
import { useGetBooksQuery } from '@/src/entities/book/model/services';
import { BookList } from '@/src/entities/book/ui/BookList';
import { BookSkeleton } from '@/src/entities/book/ui/BookSkeleton';

export const BooksView = () => {
  const t = useTranslations();
  const { data: books = [], isLoading, error } = useGetBooksQuery();

  // Обработка загрузки
  if (isLoading) {
    return (
      <div className="relative min-h-screen pt-20 pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <HackerBackground />
        <ScanEffect speed="slow" />
        
        <Container maxWidth="lg">
          <TerminalWindow 
            title="root@resume:~/books$"
            subtitle="ls -la /books --details"
            headerText={t('books_header')}
          >
            <VStack gap="24" className="w-full">
              {/* Секция кубик-рубика */}
              <div className="group">
                <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                  <span className="font-mono text-sm">$&gt;</span>
                  <span className="font-mono text-sm opacity-70">{t('rubiks_cube_title')}</span>
                </div>
                <div className="pl-4 space-y-2">
                  <div className="h-16 bg-(--skeleton-color) rounded animate-pulse" />
                  <div className="h-4 bg-(--skeleton-color) rounded w-3/4 animate-pulse" />
                </div>
              </div>

              {/* Секция фильмов */}
              <div className="group">
                <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                  <span className="font-mono text-sm">$&gt;</span>
                  <span className="font-mono text-sm opacity-70">{t('movies_title')}</span>
                </div>
                <div className="pl-4 space-y-2">
                  <div className="h-16 bg-(--skeleton-color) rounded animate-pulse" />
                  <div className="h-4 bg-(--skeleton-color) rounded w-2/3 animate-pulse" />
                </div>
              </div>

              {/* Секция книг - скелетон */}
              <div className="group">
                <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                  <span className="font-mono text-sm">$&gt;</span>
                  <span className="font-mono text-sm opacity-70">{t('books_fav_title')}</span>
                </div>
                <p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-400 font-mono text-sm mb-4">
                  {t('books_fav_text')}
                </p>
                <BookSkeleton count={6} />
              </div>

              {/* ASCII Art скелетон */}
              <div className="my-4 text-center">
                <div className="h-32 bg-(--skeleton-color) rounded animate-pulse" />
              </div>

              {/* Статистика скелетон */}
              <div className="mt-2 p-3 border border-(--primary-color)/20 rounded-lg bg-black/30">
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-4 bg-(--skeleton-color) rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </VStack>
            
            <StatusBar 
              user="user@resume"
              path="~/books"
              rightItems={[
                { icon: '📚', label: 'books', value: '---' },
                { icon: '🎬', label: 'movies', value: '...', color: 'text-[var(--primary-color)]' },
                { icon: '🧩', label: 'cube', value: '...', color: 'text-yellow-500' }
              ]}
            />
          </TerminalWindow>
        </Container>
      </div>
    );
  }

  // Обработка ошибки
  if (error) {
    return (
      <div className="relative min-h-screen pt-20 pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <HackerBackground />
        <ScanEffect speed="slow" />
        
        <Container maxWidth="lg">
          <TerminalWindow 
            title="root@resume:~/books$"
            subtitle="ls -la /books --details"
            headerText={t('books_header')}
          >
            <div className="p-6 text-center md:p-8">
              <div className="mb-4 font-mono text-lg text-red-500">⚠️ ERROR</div>
              <p className="mb-2 font-mono text-gray-300">{t('books_error')}</p>
              <p className="font-mono text-sm text-gray-500">{t('books_error_hint')}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-4 py-2 bg-(--primary-color) text-black rounded-lg font-mono text-sm hover:opacity-90 transition"
              >
                $&gt; retry
              </button>
            </div>
            
            <StatusBar 
              user="user@resume"
              path="~/books"
              variant="error"
              rightItems={[
                { icon: '⚠️', label: 'status', value: 'error', color: 'text-red-500' }
              ]}
            />
          </TerminalWindow>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-20 pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      {/* Хакерский фон */}
      <HackerBackground />
      
      {/* Эффект сканирования */}
      <ScanEffect speed="slow" />

      <Container maxWidth="lg">
        <TerminalWindow 
          title="root@resume:~/books$"
          subtitle="ls -la /books --details"
          headerText={t('books_header')}
        >
          <VStack gap="24" className="w-full">
            {/* Секция: Кубик-Рубика */}
            <div className="group">
              <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                <span className="font-mono text-sm">$&gt;</span>
                <span className="font-mono text-sm opacity-70">{t('rubiks_cube_title')}</span>
              </div>
              <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                {t('rubiks_cube_text_start')}
                <span className="text-(--primary-color) font-bold">{t('rubiks_cube_record')}</span>
                {t('rubiks_cube_text_end')}
              </p>
            </div>

            {/* Секция: Фильмы */}
            <div className="group">
              <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                <span className="font-mono text-sm">$&gt;</span>
                <span className="font-mono text-sm opacity-70">{t('movies_title')}</span>
              </div>
              <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                {t('movies_text')}
              </p>
              <div className="pl-4 mt-3 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-(--primary-color)">•</span>
                  <a 
                    href="https://www.imdb.com/title/tt0120689/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-(--primary-color) transition-colors font-mono text-sm"
                  >
                    {t('movie_green_mile')}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-(--primary-color)">•</span>
                  <a 
                    href="https://www.imdb.com/title/tt7130300/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-(--primary-color) transition-colors font-mono text-sm"
                  >
                    {t('movie_woman_in_cabin')}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-(--primary-color)">•</span>
                  <a 
                    href="https://www.imdb.com/title/tt21382296/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-(--primary-color) transition-colors font-mono text-sm"
                  >
                    {t('movie_carry_on')}
                  </a>
                </div>
              </div>
            </div>

            {/* Секция: Любимые книги */}
            <div className="group">
              <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                <span className="font-mono text-sm">$&gt;</span>
                <span className="font-mono text-sm opacity-70">{t('books_fav_title')}</span>
              </div>
              <p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-400 font-mono text-sm mb-4">
                {t('books_fav_text')}
              </p>
              
              {/* Список книг */}
              <BookList books={books} />
            </div>

            {/* ASCII Art - Книга */}
            <div className="my-4 text-center">
              <pre className="text-(--primary-color) text-xs opacity-40 select-none font-mono whitespace-pre-wrap">
{`    ╔══════════════════════════════════════════╗
    ║              📚                            ║
    ║         ╭─────────────╮                    ║
    ║         │  LIBRARY    │                    ║
    ║         │  v2.0.0     │                    ║
    ║         ╰─────────────╯                    ║
    ║    ┌─────────────────────────┐             ║
    ║    │  ${t('books_ascii_collection')}: ${books.length}    │             ║
    ║    │  ${t('books_ascii_pages')}: ∞          │             ║
    ║    │  ${t('books_ascii_genre')}: ${t('books_ascii_genre_value')}      │             ║
    ║    └─────────────────────────┘             ║
    ╚══════════════════════════════════════════╝`}
              </pre>
            </div>

            {/* Статистика */}
            <div className="mt-2 p-3 border border-(--primary-color)/20 rounded-lg bg-black/30">
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="text-gray-400">{'>'} rubiks_cube_record:</div>
                <div className="text-(--primary-color)">{t('stats_cube_record')}</div>
                <div className="text-gray-400">{'>'} favorite_platform:</div>
                <div className="text-(--primary-color)">{t('stats_platform')}</div>
                <div className="text-gray-400">{'>'} books_read:</div>
                <div className="text-(--primary-color)">{t('stats_books_read')}</div>
                <div className="text-gray-400">{'>'} current_mood:</div>
                <div className="text-(--primary-color) animate-pulse">{t('stats_mood')}</div>
              </div>
            </div>
          </VStack>
          
          <StatusBar 
            user="user@resume"
            path="~/books"
            rightItems={[
              { icon: '📚', label: 'books', value: books.length },
              { icon: '🎬', label: 'movies', value: t('status_watched'), color: 'text-[var(--primary-color)]' },
              { icon: '🧩', label: 'cube', value: '12s', color: 'text-yellow-500' }
            ]}
          />
        </TerminalWindow>
      </Container>
    </div>
  );
};

BooksView.displayName = 'BooksView';