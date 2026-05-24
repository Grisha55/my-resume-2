import type { I18nConfig } from 'next-i18next/proxy'

const i18nConfig: I18nConfig = {
  supportedLngs: ['ru', 'en'],
  fallbackLng: 'ru',
  defaultNS: 'common',
  ns: ['common', 'home', 'about', 'contacts'],
  // Опционально: скрыть дефолтный язык из URL (ru → /about, en → /en/about)
  hideDefaultLocale: true,
  resourceLoader: (language: string, namespace: string) =>
    import(`@/i18n/locales/${language}/${namespace}.json`),
}

export default i18nConfig