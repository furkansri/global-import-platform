'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { MapPin } from 'lucide-react'

const TEAM = [
  {
    name: 'Ahmet Yılmaz',
    role: 'team_ceo',
    initials: 'AY',
    gradient: 'from-navy to-ocean',
    location: 'İstanbul, Türkiye',
    flag: '🇹🇷',
  },
  {
    name: 'Li Wei (李伟)',
    role: 'team_china_ops',
    initials: '李',
    gradient: 'from-red-700 to-red-500',
    location: 'Şangay, Çin',
    flag: '🇨🇳',
  },
  {
    name: 'Zhang Min (张敏)',
    role: 'team_qc',
    initials: '张',
    gradient: 'from-ocean to-navy',
    location: 'Guangzhou, Çin',
    flag: '🇨🇳',
  },
  {
    name: 'Ayşe Kaya',
    role: 'team_crm',
    initials: 'AK',
    gradient: 'from-gold/80 to-gold/50',
    location: 'İstanbul, Türkiye',
    flag: '🇹🇷',
  },
]

export function TeamSection() {
  const t = useTranslations('home.team')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-ocean uppercase mb-3">
            {t('label')}
          </span>
          <h2 className="font-bold text-navy mb-4">{t('title')}</h2>
          <p className="text-navy/55 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-ocean/20 hover:shadow-md transition-all bg-gray-50 hover:bg-white"
            >
              <div className="relative mb-5 mx-auto w-fit">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto shadow-md`}>
                  <span className="text-white font-bold text-2xl">{member.initials}</span>
                </div>
                <span className="absolute -bottom-1 -right-1 text-lg">{member.flag}</span>
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">{member.name}</h4>
              <p className="text-ocean text-xs font-semibold mb-3">{t(member.role as any)}</p>
              <div className="flex items-center justify-center gap-1 text-navy/40 text-xs">
                <MapPin size={11} />
                <span>{member.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
