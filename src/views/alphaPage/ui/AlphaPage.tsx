'use client';

import { imageApi, SectionImages } from '@/app/api/imageApi';
import { Container } from '@/src/shared/ui/Container';
import { HackerBackground } from '@/src/shared/ui/HackerBackground';
import { StatusBar } from '@/src/shared/ui/StatusBar';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import { useEffect, useState } from 'react';
import { VStack } from '@/src/shared/ui/Stack';
import { useTranslations } from 'next-intl';

export function AlphaView() {
    const [images, setImages] = useState<SectionImages | null>(null);
    const [loading, setLoading] = useState(true);
    const t = useTranslations();

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
                    <div className="text-center text-gray-400 animate-pulse">{t('alpha_loading')}</div>
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
                    headerText={t('alpha_header')}
                >
                    <VStack gap="24" className="w-full">
                        {/* Основной текст - история спасения */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70">{t('alpha_rescue_title')}</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                {t('alpha_rescue_text')}
                            </p>
                        </div>

                        {/* Лучший друг Альфы - Граф */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70">{t('alpha_best_friend_title')}</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed mb-4">
                                {t('alpha_best_friend_text')}
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
                                        {t('alpha_best_friend_caption')}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Хобби Альфы - IT-специалист по утилизации */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70">{t('alpha_hobby_title')}</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all text-gray-300 font-mono text-sm leading-relaxed">
                                {t('alpha_hobby_text_start')}
                                <span className="text-(--primary-color)">{t('alpha_hobby_motto')}</span>
                                {t('alpha_hobby_text_end')}
                            </p>
                        </div>

                        {/* Галлерея фотографий */}
                        <div className="group">
                            <div className="flex items-center gap-2 text-(--primary-color) mb-2">
                                <span className="font-mono text-sm">$&gt;</span>
                                <span className="font-mono text-sm opacity-70">{t('alpha_gallery_title')}</span>
                            </div>
                            <p className="pl-4 border-l-2 border-(--primary-color)/30 text-gray-400 font-mono text-sm mb-4">
                                {t('alpha_gallery_text')}
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
                                <span className="font-mono text-sm opacity-70">{t('alpha_thanks_title')}</span>
                            </div>
                            <div className="pl-4 border-l-2 border-(--primary-color)/30 hover:border-(--primary-color) transition-all">
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    {t('alpha_thanks_text')}
                                </p>
                                <div className="mt-3 text-(--primary-color) font-mono text-sm">
                                    <span className="animate-pulse">{t('alpha_system_message')}</span>
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
    ║    │  STATUS: ${t('alpha_ascii_status')}      │             ║
    ║    │  BATTERY: 🔋🔋🔋🔋🔋  │             ║
    ║    │  WIRE_COLLECTION: ${t('alpha_ascii_wires')} │             ║
    ║    └─────────────────────┘             ║
    ╚══════════════════════════════════════╝`}
                            </pre>
                        </div>

                        {/* Дополнительная статистика */}
                        <div className="mt-2 p-3 border border-(--primary-color)/20 rounded-lg bg-black/30">
                            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                                <div className="text-gray-400">{'>'} age_at_adoption:</div>
                                <div className="text-(--primary-color)">{t('alpha_stat_age')}</div>
                                <div className="text-gray-400">{'>'} best_friend:</div>
                                <div className="text-(--primary-color)">{t('alpha_stat_friend')}</div>
                                <div className="text-gray-400">{'>'} destroyed_cables:</div>
                                <div className="text-(--primary-color)">{t('alpha_stat_cables')}</div>
                                <div className="text-gray-400">{'>'} happiness_level:</div>
                                <div className="text-(--primary-color)">{t('alpha_stat_happiness')}</div>
                            </div>
                        </div>
                    </VStack>
                    
                    <StatusBar 
                        user="user@resume"
                        path="~/alpha"
                        rightItems={[
                            { icon: '📸', label: 'photos', value: images?.images.length || 0 },
                            { icon: '🐕', label: 'status', value: t('alpha_status_online'), color: 'text-[var(--primary-color)]' },
                            { icon: '⚡', label: 'energy', value: 'infinite', color: 'text-yellow-500' }
                        ]}
                    />
                </TerminalWindow>
            </Container>
        </div>
    );
}