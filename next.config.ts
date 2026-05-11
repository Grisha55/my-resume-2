import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
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

export default nextConfig;