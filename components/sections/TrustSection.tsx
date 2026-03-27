'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Shield, FileText, Clock, Users } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Shield, title: 'ISO 9001 Kalite', desc: 'Uluslararası kalite yönetim standardı' },
  { icon: FileText, title: 'SGS Denetimli', desc: 'Tedarikçilerimiz SGS denetimleri ile onaylanmıştır' },
  { icon: Clock, title: '10+ Yıl Deneyim', desc: 'Sektörde bir on yılı aşkın güvenilir hizmet' },
  { icon: Users, title: 'IATA Üyesi', desc: 'Uluslararası hava taşımacılığı birliği üyeliği' },
]

export function TrustSection() {
  const t = useTranslations('home')

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-bold text-navy mb-3">{t('trust_title')}</h2>
          <p className="text-navy/60 max-w-xl mx-auto">{t('trust_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-ocean/10 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-ocean" />
                </div>
                <h4 className="font-semibold text-navy mb-2 text-sm">{item.title}</h4>
                <p className="text-navy/55 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
