import { NextRequest, NextResponse } from 'next/server';

// Экспортируем функцию с именем 'proxy' (или как default)
export function proxy(request: NextRequest) {
  // Здесь будет твоя логика (редирект, проверка языка и т.д.)
  
  // Если ничего не делаем, просто пропускаем запрос дальше
  return NextResponse.next();
}

// Настройка, на какие пути должен срабатывать proxy
export const config = {
  matcher: [
    // Пропускаем статические файлы и внутренние пути Next.js
    '/((?!_next/static|_next/image|favicon.ico|assets|.*\\.png|.*\\.jpg|.*\\.svg).*)',
  ],
};