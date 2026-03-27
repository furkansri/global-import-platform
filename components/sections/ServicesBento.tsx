'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Ship, Plane, Truck, FileCheck, Package, Shield } from 'lucide-react'

const ICONS = [Ship, Plane, Truck, FileCheck, Package, Shield]

const GRID_CLASSES = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
]

export function ServicesBento() {
  const t = useTranslations('services')
  const items = t.raw('items') as Array<{ title: string; desc: string; benefits: string[] }>

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-bold text-navy mb-3">{t('hero_title')}</h2>
          <p className="text-navy/60 max-w-xl mx-auto">{t('hero_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`${GRID_CLASSES[i]} bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-ocean/30 hover:shadow-md transition-all cursor-default group`}
              >
                <div className="w-11 h-11 rounded-xl bg-ocean/10 flex items-center justify-center mb-4 group-hover:bg-ocean/20 transition-colors">
                  <Icon size={22} className="text-ocean" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-1">
                  {item.benefits.map(b => (
                    <li key={b} className="text-xs text-navy/50 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
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
