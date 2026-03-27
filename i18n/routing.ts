import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['tr', 'en', 'ru', 'zh'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed',
  localeDetection: false,
})
