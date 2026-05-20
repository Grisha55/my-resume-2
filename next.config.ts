import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,

    images: {
    remotePatterns: [
      new URL('http://localhost:8000/uploads/**'), // Для изображений с сервера
    ],
  },
  
  turbopack: {
    rules: {
      // Все изображения обрабатываем как asset
      '*.{png,jpg,jpeg,gif,webp}': {
        type: 'asset',
      },
      // SVG обрабатываем через svgr
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default withNextIntl(nextConfig);