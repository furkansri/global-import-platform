import { useTranslations } from 'next-intl'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const STATS = [
  { key: 'experience', value: 10, suffix: '+' },
  { key: 'deliveries', value: 500, suffix: '+' },
  { key: 'countries', value: 12, suffix: '' },
  { key: 'satisfaction', value: 98, suffix: '%' },
]

export function StatsBar() {
  const t = useTranslations('home.stats')

  return (
    <section className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {STATS.map(stat => (
            <div key={stat.key} className="text-center text-white px-4 py-2">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/60">{t(stat.key as any)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
