import { imageApi, SectionImages } from '@/app/api/imageApi';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { StatusBar } from '@/src/shared/ui/StatusBar';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import { useEffect, useState } from 'react';
import { VStack } from '@/src/shared/ui/Stack';

export function AlphaView() {
    const [images, setImages] = useState<SectionImages | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await imageApi.getSectionImages('alpha');
                setImages(data);
            } catch (error) {
                console.error('Failed to load alpha images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Находим фото Графа (лучшего друга Альфы)
    const grafImage = images?.images.find(img => img.filename.includes('alpha5'));

    if (loading) {
        return (
            <div className="min-h-screen pt-20">
                <Container>
                    <div className="text-center text-gray-400 animate-pulse">Loading gallery...</div>
                </Container>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen pt-20 pb-16" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            {/* Хакерский фон */}
            <HackerBackground />
            
            <Container maxWidth="lg">
                <TerminalWindow 
                    title="root@resume:~/alpha$"
                    subtitle="cat alpha.md --verbose"
                    headerText=">_ Моя собака Альфа 🐕"
                >
                    <VStack gap="24" className="w-full">
                        {/* Основной текст - история спасения */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># История спасения</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                Я взял Альфу из приюта, когда ей было всего 3 месяца. Она сильно болела — 
                                ей делали капельницы, потому что она чем-то отравилась. Несмотря на трудности, 
                                она смогла победить болезнь и стать настоящим бойцом. С тех пор мы неразлучны. ❤️
                            </p>
                        </div>

                        {/* Лучший друг Альфы - Граф */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># Лучший друг</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed mb-4">
                                У Альфы есть лучший друг — Граф. Они всегда играют вместе и не разлей вода. 
                                Вот они на фото — настоящая банда!
                            </p>
                            {grafImage && (
                                <div className="pl-4 mt-2">
                                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-(--primary-color)/30 hover:border-(--primary-color) transition-all duration-300 group">
                                        <img
                                            src={`http://localhost:8000${grafImage.url}`}
                                            alt="Альфа и Граф"
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="mt-2 font-mono text-xs text-center text-gray-500">
                                        $&gt; Альфа и Граф — неразлучники
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Хобби Альфы - IT-специалист по утилизации */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># IT-специалист по утилизации</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                Моя собака Альфа — не просто друг, а личный IT-специалист по утилизации техники. 
                                Ее хобби — коллекционировать провода от моего макбука. Уже пять штук в ее «портфолио»! 
                                Каждый раз, глядя на ее невинные глаза, я понимаю: это не вредительство, а перформанс. 
                                Она просто считает, что у ноутбука слишком много лишних деталей. 
                                Ее девиз: <span className="text-(--primary-color)">«Меньше проводов — больше свободы!»</span> 🔌
                            </p>
                        </div>

                        {/* Галлерея фотографий */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># Галлерея</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-400 font-mono text-sm mb-4">
                                Моменты с Альфой, которые согревают душу:
                            </p>
                            <div className="pl-4">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {images?.images.map((image) => (
                                        <div 
                                            key={image.filename} 
                                            className="relative h-64 rounded-lg overflow-hidden border border-(--primary-color)/30 hover:border-(--primary-color) transition-all duration-300 group/image"
                                        >
                                            <img
                                                src={`http://localhost:8000${image.url}`}
                                                alt="Alpha"
                                                className="object-cover w-full h-full transition-transform duration-300 group-hover/image:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Благодарность */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70"># Благодарность</span>
                            </div>
                            <div className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all">
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Альфа не дает мне скучать и каждый день наполняет мою жизнь радостью и любовью. 💕
                                </p>
                                <div className="mt-3 text-(--primary-color) font-mono text-sm">
                                    <span className="animate-pulse">$&gt; system: love_level = 100%</span>
                                </div>
                            </div>
                        </div>

                        {/* ASCII Art - Собака */}
                        <div className="my-4 text-center">
                            <pre className="text-(--primary-color) text-xs opacity-40 select-none">
{`    ╔══════════════════════════════════════╗
    ║              🐕                         ║
    ║         ╭─────────╮                    ║
    ║         │  ALPHA  │                    ║
    ║         │  v1.0.0 │                    ║
    ║         ╰─────────╯                    ║
    ║    ┌─────────────────────┐             ║
    ║    │  STATUS: HAPPY      │             ║
    ║    │  BATTERY: 🔋🔋🔋🔋🔋  │             ║
    ║    │  WIRE_COLLECTION: 5 │             ║
    ║    └─────────────────────┘             ║
    ╚══════════════════════════════════════╝`}
                            </pre>
                        </div>

                        {/* Дополнительная статистика */}
                        <div className="mt-2 p-3 border border-(--primary-color)/20 rounded-lg bg-black/30">
                            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                                <div className="text-gray-400">{'>'} age_at_adoption:</div>
                                <div className="text-(--primary-color)">3 months</div>
                                <div className="text-gray-400">{'>'} best_friend:</div>
                                <div className="text-(--primary-color)">Graf</div>
                                <div className="text-gray-400">{'>'} destroyed_cables:</div>
                                <div className="text-(--primary-color)">5 macbook chargers</div>
                                <div className="text-gray-400">{'>'} happiness_level:</div>
                                <div className="text-(--primary-color)">OVERFLOW 🔥</div>
                            </div>
                        </div>
                    </VStack>
                    
                    <StatusBar 
                        user="user@resume"
                        path="~/alpha"
                        rightItems={[
                            { icon: '📸', label: 'photos', value: images?.images.length || 0 },
                            { icon: '🐕', label: 'status', value: 'online', color: 'text-[var(--primary-color)]' },
                            { icon: '⚡', label: 'energy', value: 'infinite', color: 'text-yellow-500' }
                        ]}
                    />
                </TerminalWindow>
            </Container>
        </div>
    );
}