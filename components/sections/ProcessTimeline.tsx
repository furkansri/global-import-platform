'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function ProcessTimeline() {
  const t = useTranslations('home')
  const steps = t.raw('process_steps') as Array<{ title: string; desc: string }>

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-bold text-white mb-3">{t('process_title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-white/20" />
              )}
              <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold text-lg mx-auto mb-4">
                {i + 1}
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
