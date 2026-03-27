'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, ChevronDown } from 'lucide-react'

function localePath(locale: string, path: string) {
  return locale === 'tr' ? path : `/${locale}${path}`
}

export function Hero() {
  const t = useTranslations('home.hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Global logistics"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-ocean/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block glass px-4 py-1.5 rounded-full text-sm text-gold font-medium mb-6">
            Çin → Türkiye Tedarik Platformu
          </span>

          <h1 className="font-bold text-white whitespace-pre-line mb-6 max-w-4xl mx-auto">
            {t('title')}
          </h1>

          <p className="text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localePath(locale, '/#teklif')}
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition-all hover:scale-105 shadow-lg"
            >
              {t('cta_primary')}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={localePath(locale, '/hizmetler')}
              className="inline-flex items-center gap-2 glass text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-all"
            >
              {t('cta_secondary')}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
