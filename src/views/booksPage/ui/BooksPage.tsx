'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { StatusBar } from '@/src/shared/ui/StatusBar';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import { VStack } from '@/src/shared/ui/Stack';
import { imageApi, Book } from '@/app/api/imageApi';

export const BooksView = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await imageApi.getBooks();
                setBooks(data);
            } catch (error) {
                console.error('Failed to load book images:', error);
				setError(error instanceof Error ? error.message : 'Failed to load books');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const getImageUrl = (imagePath: string) => {
        return `http://localhost:8000${imagePath}`;
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-20">
                <Container>
                    <div className="text-center text-gray-400 animate-pulse">Loading library...</div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen pt-20 bg-black">
                <Container>
                    <div className="text-center text-red-500">
                        <p>Error: {error}</p>
                        <p className="mt-2 text-sm text-gray-400">Make sure JSON Server is running on port 8000</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen pt-20 pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <HackerBackground />
            
            <Container maxWidth="lg">
                <TerminalWindow 
                    title="root@resume:~/books$"
                    subtitle="ls -la /books --details"
                    headerText=">_ Другое! 📚"
                >
                    <VStack gap="24" className="w-full">
                        {/* Кубик-Рубика */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># Кубик-Рубика 🧩</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                5 лет назад я научился собирать кубик-Рубика. Я даже участвовал в соревнованиях по собиранию его на скорость. 
                                Мой рекорд — <span className="text-(--primary-color)">12 секунд</span>. Сейчас я собираю кубик для того, чтобы размять руки перед рабочим днем.
                            </p>
                        </div>

                        {/* Фильмы */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># Фильмы 🎬</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                Я обожаю смотреть фильмы — новинки. Мне всегда было интересно наблюдать за прогрессом кинематографа. 
                                Я люблю фильмы Netflix за их яркий спектр красок. Также из моих любимчиков есть такие фильмы, как:
                            </p>
                            <div className="pl-4 mt-2 space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-(--primary-color)">•</span>
                                    <a 
                                        href="https://www.imdb.com/title/tt0120689/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-(--primary-color) transition-colors font-mono text-sm"
                                    >
                                        [«Зеленая миля»]
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
                                        [«Девушка из каюты №10»]
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
                                        [«Ручная кладь»]
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Любимые книги */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># Любимые книги 📖</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-400 font-mono text-sm mb-4">
                                Одни из моих самых любимых книг:
                            </p>
                            <div className="pl-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {books.map((book) => (
                                        <div 
                                            key={book.id}
                                            className="group/book border border-(--primary-color)/30 rounded-lg overflow-hidden hover:border-(--primary-color) transition-all duration-300 hover:scale-[1.02] bg-black/50"
                                        >
                                            <div className="relative w-full h-48 overflow-hidden">
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
                                                <cite className="font-mono text-xs text-gray-400">
                                                    {book.author}
                                                </cite>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ASCII Art - Книга */}
                        <div className="my-4 text-center">
                            <pre className="text-(--primary-color) text-xs opacity-40 select-none">
{`    ╔══════════════════════════════════════════╗
    ║              📚                            ║
    ║         ╭─────────────╮                    ║
    ║         │  LIBRARY    │                    ║
    ║         │  v2.0.0     │                    ║
    ║         ╰─────────────╯                    ║
    ║    ┌─────────────────────────┐             ║
    ║    │  BOOKS_COLLECTION: 6    │             ║
    ║    │  PAGES_READ: ∞          │             ║
    ║    │  FAV_GENRE: SCI-FI      │             ║
    ║    └─────────────────────────┘             ║
    ╚══════════════════════════════════════════╝`}
                            </pre>
                        </div>

                        {/* Статистика */}
                        <div className="mt-2 p-3 border border-(--primary-color)/20 rounded-lg bg-black/30">
                            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                                <div className="text-gray-400">{'>'} rubiks_cube_record:</div>
                                <div className="text-(--primary-color)">12 sec</div>
                                <div className="text-gray-400">{'>'} favorite_platform:</div>
                                <div className="text-(--primary-color)">Netflix</div>
                                <div className="text-gray-400">{'>'} books_read:</div>
                                <div className="text-(--primary-color)">infinite 🔄</div>
                                <div className="text-gray-400">{'>'} current_mood:</div>
                                <div className="text-(--primary-color) animate-pulse">READING_MODE</div>
                            </div>
                        </div>
                    </VStack>
                    
                    <StatusBar 
                        user="user@resume"
                        path="~/books"
                        rightItems={[
                            { icon: '📚', label: 'books', value: books.length },
                            { icon: '🎬', label: 'movies', value: 'watched', color: 'text-[var(--primary-color)]' },
                            { icon: '🧩', label: 'cube', value: '12s', color: 'text-yellow-500' }
                        ]}
                    />
                </TerminalWindow>
            </Container>
        </div>
    );
};

BooksView.displayName = 'BooksView';