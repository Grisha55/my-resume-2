// app/[locale]/alpha/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/src/shared/ui/Container';
import { TerminalWindow } from '@/src/shared/ui/TerminalWindow';
import { StatusBar } from '@/src/shared/ui/StatusBar';
import { imageApi, SectionImages } from '@/app/api/imageApi';

export default function AlphaPage() {
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

    if (loading) {
        return (
            <div className="min-h-screen pt-20 bg-black">
                <Container>
                    <div className="text-center text-gray-400 animate-pulse">Loading gallery...</div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-16 bg-black">
            <Container maxWidth="lg">
                <TerminalWindow 
                    title="root@resume:~/alpha$"
                    subtitle="cat alpha.md --verbose"
                    headerText=">_ Моя собака Альфа"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {images?.images.map((image) => (
                            <div 
                                key={image.filename} 
                                className="relative h-64 rounded-lg overflow-hidden border border-[var(--primary-color)]/30 hover:border-[var(--primary-color)] transition-all duration-300 group"
                            >
                                <img
                                    src={`http://localhost:8000${image.url}`}
                                    alt="Alpha"
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                    
                    <StatusBar 
                        user="user@resume"
                        path="~/alpha"
                        rightItems={[
                            { icon: '📸', label: 'photos', value: images?.images.length || 0 },
                            { icon: '🐕', label: 'status', value: 'online', color: 'text-[var(--primary-color)]' }
                        ]}
                    />
                </TerminalWindow>
            </Container>
        </div>
    );
}