'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'

function localePath(locale: string, path: string) {
  return locale === 'tr' ? path : `/${locale}${path}`
}

export function CTABanner() {
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#1e6fbf,transparent)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-white mb-4">{t('cta_title')}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t('cta_subtitle')}</p>
          <Link
            href={localePath(locale, '/#teklif')}
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-10 py-4 rounded-full hover:bg-gold-light transition-all hover:scale-105 shadow-xl"
          >
            {t('cta_button')}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
