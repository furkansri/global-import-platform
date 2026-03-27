'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { BRAND_NAME } from '@/lib/constants'

function localePath(locale: string, path: string) {
  return locale === 'tr' ? path : `/${locale}${path}`
}

export function Navbar() {
  const t = useTranslations('common.nav')
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: t('home'), href: localePath(locale, '/') },
    { label: t('about'), href: localePath(locale, '/hakkimizda') },
    { label: t('services'), href: localePath(locale, '/hizmetler') },
    { label: t('contact'), href: localePath(locale, '/iletisim') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={localePath(locale, '/')} className="flex items-center gap-2.5">
          <Image src="/logo_mark.png" alt={BRAND_NAME} width={36} height={36} className="object-contain" />
          <span className="text-white font-bold text-lg tracking-tight">{BRAND_NAME}</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href={localePath(locale, '/#teklif')}
            className="bg-gold text-navy font-semibold text-sm px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
          >
            {t('cta')}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button onClick={() => setMobileOpen(o => !o)} className="text-white p-1">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden glass-dark border-t border-white/10">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-white/90 hover:text-white text-sm font-medium border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href={localePath(locale, '/#teklif')}
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-gold text-navy font-semibold text-sm px-5 py-3 rounded-full"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
