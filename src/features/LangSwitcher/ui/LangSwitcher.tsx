'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ToggleFeatures } from '@/src/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Button } from '@/src/shared/ui/Button';
import { HStack } from '@/src/shared/ui/Stack';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
  variant?: 'default' | 'minimal' | 'with-text';
}

export const LangSwitcher = ({ 
  className = '', 
  short, 
  variant = 'default' 
}: LangSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    // Заменяем текущий язык в URL на новый
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    
    // Вариант 1: Используем router.push с последующей перезагрузкой
    router.push(newPathname);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const isRu = locale === 'ru';

  const getButtonStyles = () => {
    switch (variant) {
      case 'minimal':
        return `
          p-2 rounded-lg transition-all duration-200
          hover:bg-gray-100 dark:hover:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
          text-gray-600 dark:text-gray-400
          hover:text-[var(--primary-color)]
        `;
      case 'with-text':
        return `
          px-4 py-2 rounded-lg flex items-center gap-3 transition-all duration-200
          bg-[var(--bg-redesigned)] hover:bg-[var(--light-bg-redesigned)]
          focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
          text-[var(--text-redesigned)]
        `;
      default:
        return `
          relative p-2 rounded-xl transition-all duration-300
          bg-[var(--bg-redesigned)] hover:bg-[var(--light-bg-redesigned)]
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-[var(--accent-redesigned)]
          text-[var(--icon-redesigned)] hover:text-[var(--accent-redesigned)]
          group font-bold
        `;
    }
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button onClick={() => switchLocale(isRu ? 'en' : 'ru')} variant="clear" className={className}>
          <HStack gap="4" align="center">
            <span className="text-lg">{isRu ? '🇬🇧' : '🇷🇺'}</span>
            {!short && variant !== 'minimal' && (
              <span className="text-sm font-medium">{isRu ? 'English' : 'Русский'}</span>
            )}
            {short && <span className="text-sm font-medium">{isRu ? 'EN' : 'RU'}</span>}
          </HStack>
        </Button>
      }
      off={
        <button
          onClick={() => switchLocale(isRu ? 'en' : 'ru')}
          className={`${getButtonStyles()} ${className}`}
        >
          <HStack gap="4" align="center">
            <span className="text-lg">{isRu ? '🇬🇧' : '🇷🇺'}</span>
            {short ? (isRu ? 'EN' : 'RU') : (isRu ? 'English' : 'Русский')}
          </HStack>
        </button>
      }
    />
  );
};