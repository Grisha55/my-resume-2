import type { Metadata, Viewport } from 'next'; // Добавляем импорт Viewport
import { initServerI18next, getT, getResources, generateI18nStaticParams } from 'next-i18next/server';
import { I18nProvider } from 'next-i18next/client';
import i18nConfig from '@/i18n.config';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import { AppPageLayout } from '../app-layout';
import { Providers } from '../providers';
import '@/src/app/styles/variables/globals.css';

initServerI18next(i18nConfig)

export async function generateStaticParams() {
  return generateI18nStaticParams()
}

const jetbrains = JetBrains_Mono({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-jetbrains',
    display: 'swap'
});

const hack = localFont({
    src: [
        {
            path: '../../public/fonts/Hack-Regular.woff2',
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

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lng: string }>;
}>) {
    const { lng } = await params;
    const { i18n } = await getT();
    const resources = getResources(i18n);

    return (
        <html
            lang={lng}
            className={`${hack.variable} ${jetbrains.variable}`}
        >
            <body id="root">
                <I18nProvider language={lng} resources={resources}>
                    <Providers>
                        <AppPageLayout>{children}</AppPageLayout>
                    </Providers>
                </I18nProvider>
            </body>
        </html>
    );
}