import type { Metadata, Viewport } from 'next'; // Добавляем импорт Viewport
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import '../src/app/styles/variables/globals.css';
import { AppPageLayout } from './app-layout';
import { Providers } from './providers';

const jetbrains = JetBrains_Mono({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-jetbrains',
    display: 'swap'
});

const hack = localFont({
    src: [
        {
            path: '../public/fonts/Hack-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/fonts/Hack-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/Hack-Italic.woff2',
            weight: '400',
            style: 'italic'
        }
    ],
    variable: '--font-hack',
    display: 'swap'
});

const title = 'Моё Резюме';
const description = 'Описание моего сайта';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://my-site.com';

// Метаданные (без viewport)
export const metadata: Metadata = {
    title: {
        default: title,
        template: `%s | ${title}`,
    },
    description: description,
    
    // Open Graph метатеги (для соцсетей)
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        siteName: title,
        title: title,
        description: description,
        images: [
            {
                url: `${baseUrl}/avatar.jpg`,
                width: 900,
                height: 900,
                alt: `${title} - логотип`,
            },
        ],
        url: baseUrl,
    },
    
    // Twitter метатеги (для Twitter)
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [`${baseUrl}/avatar.jpg`],
    },
    
    // Дополнительные метатеги
    icons: {
        icon: '/favicon.ico',
    },
    
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    ],
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`${hack.variable} ${jetbrains.variable}`}
        >
            <body id="root">
                <Providers>
                    <AppPageLayout>{children}</AppPageLayout>
                </Providers>
            </body>
        </html>
    );
}