export const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME ?? 'GlobalBridge'
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP ?? '+905XXXXXXXXX'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`

export const LOCALES = ['tr', 'en', 'ru', 'zh'] as const
export type Locale = typeof LOCALES[number]

export const LOCALE_LABELS: Record<Locale, string> = {
  tr: '🇹🇷 TR',
  en: '🇬🇧 EN',
  ru: '🇷🇺 RU',
  zh: '🇨🇳 ZH',
}
