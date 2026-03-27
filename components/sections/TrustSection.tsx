'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Shield, FileText, Clock, Users } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: Shield, title: 'ISO 9001 Kalite', desc: 'Uluslararası kalite yönetim standardı ile sertifikalı süreçler' },
  { icon: FileText, title: 'SGS Denetimli', desc: 'Tedarikçilerimiz bağımsız SGS denetimleri ile onaylanmıştır' },
  { icon: Clock, title: '10+ Yıl Deneyim', desc: 'Sektörde bir on yılı aşkın güvenilir ve kesintisiz hizmet' },
  { icon: Users, title: 'IATA Üyesi', desc: 'Uluslararası hava taşımacılığı birliği aktif üyeliği' },
]

export function TrustSection() {
  const t = useTranslations('home')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-ocean uppercase mb-3">
            Güven &amp; Kalite
          </span>
          <h2 className="font-bold text-navy mb-4">{t('trust_title')}</h2>
          <p className="text-navy/55 max-w-xl mx-auto text-sm leading-relaxed">{t('trust_subtitle')}</p>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-ocean/20 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-ocean/10 transition-colors">
                  <Icon size={28} className="text-ocean" />
                </div>
                <h4 className="font-bold text-navy mb-2 text-sm">{item.title}</h4>
                <p className="text-navy/50 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
