'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials')
  const items = t.raw('items') as Array<{ text: string; name: string; company: string; city: string }>

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-ocean uppercase mb-3">
            {t('label')}
          </span>
          <h2 className="font-bold text-navy mb-4">{t('title')}</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col"
            >
              <Quote size={28} className="text-gold/40 mb-4 flex-shrink-0" />
              <p className="text-navy/70 text-sm leading-relaxed flex-1 mb-6">{item.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-navy text-sm">{item.name}</p>
                  <p className="text-navy/45 text-xs">{item.company} · {item.city}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
