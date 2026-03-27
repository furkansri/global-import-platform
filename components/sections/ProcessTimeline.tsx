'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function ProcessTimeline() {
  const t = useTranslations('home')
  const steps = t.raw('process_steps') as Array<{ title: string; desc: string }>

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top,#1e6fbf,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-3">
            Adım Adım Süreç
          </span>
          <h2 className="font-bold text-white mb-4">{t('process_title')}</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-px bg-white/15" />
              )}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-gold/30 flex items-center justify-center text-gold font-bold text-xl">
                  {i + 1}
                </div>
                <div className="absolute inset-0 rounded-full bg-gold/10 blur-sm" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2 leading-snug">{step.title}</h4>
              <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
