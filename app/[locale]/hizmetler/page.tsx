import { getTranslations } from 'next-intl/server'
import { Ship, Plane, Truck, FileCheck, Package, Shield } from 'lucide-react'

const ICONS = [Ship, Plane, Truck, FileCheck, Package, Shield]

export default async function ServicesPage() {
  const t = await getTranslations('services')
  const items = t.raw('items') as Array<{ title: string; desc: string; benefits: string[] }>

  return (
    <main className="pt-16">
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-bold text-white mb-4">{t('hero_title')}</h1>
          <p className="text-white/65">{t('hero_subtitle')}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-ocean/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-ocean" />
                </div>
                <h3 className="font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-navy/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
