'use client'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { LOCALE_LABELS, LOCALES, type Locale } from '@/lib/constants'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function switchLocale(next: Locale) {
    setOpen(false)
    const segments = pathname.split('/')
    const isLocaleSegment = LOCALES.includes(segments[1] as Locale)
    if (next === 'tr') {
      const newPath = isLocaleSegment ? '/' + segments.slice(2).join('/') : pathname
      router.push(newPath || '/')
    } else {
      const newPath = isLocaleSegment
        ? '/' + next + '/' + segments.slice(2).join('/')
        : '/' + next + pathname
      router.push(newPath)
    }
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
