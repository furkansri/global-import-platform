'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Ship, Plane, Truck, FileCheck, Package, Shield } from 'lucide-react'

const ICONS = [Ship, Plane, Truck, FileCheck, Package, Shield]
const ICON_COLORS = [
  'text-ocean bg-ocean/10 group-hover:bg-ocean/20',
  'text-gold bg-gold/10 group-hover:bg-gold/20',
  'text-ocean bg-ocean/10 group-hover:bg-ocean/20',
  'text-gold bg-gold/10 group-hover:bg-gold/20',
  'text-ocean bg-ocean/10 group-hover:bg-ocean/20',
  'text-gold bg-gold/10 group-hover:bg-gold/20',
]

export function ServicesBento() {
  const t = useTranslations('services')
  const items = t.raw('items') as Array<{ title: string; desc: string; benefits: string[] }>

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-ocean uppercase mb-3">
            {t('hero_subtitle')}
          </span>
          <h2 className="font-bold text-navy mb-4">{t('hero_title')}</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-ocean/20 hover:shadow-lg transition-all cursor-default"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors ${ICON_COLORS[i]}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map(b => (
                    <li key={b} className="text-xs text-navy/50 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
