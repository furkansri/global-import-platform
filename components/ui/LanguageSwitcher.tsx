'use client'
import { useLocale } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { LOCALE_LABELS, LOCALES, type Locale } from '@/lib/constants'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname() // locale-stripped path, e.g. "/hakkimizda"
  const [open, setOpen] = useState(false)

  function switchLocale(next: Locale) {
    setOpen(false)
    // Build absolute URL: TR has no prefix, others get /xx prefix
    const newUrl = next === 'tr' ? pathname : `/${next}${pathname}`
    // Delete the NEXT_LOCALE cookie so it doesn't override
    document.cookie = 'NEXT_LOCALE=; path=/; max-age=0'
    window.location.href = newUrl
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all"
      >
        {LOCALE_LABELS[locale]}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 glass-dark rounded-xl overflow-hidden shadow-xl z-50">
          {LOCALES.map(l => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full text-left px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors ${l === locale ? 'bg-white/15 font-semibold' : ''}`}
            >
              {LOCALE_LABELS[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
