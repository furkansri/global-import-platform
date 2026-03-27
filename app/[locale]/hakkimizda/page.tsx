import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default async function AboutPage() {
  const t = await getTranslations('about')
  const values = t.raw('values') as Array<{ title: string; desc: string }>
  const whyUs = t.raw('why_us') as string[]

  return (
    <main className="pt-16">
      <section className="relative py-28 bg-navy text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/logistics-1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="font-bold text-white mb-4">{t('hero_title')}</h1>
          <p className="text-white/70 text-lg">{t('hero_subtitle')}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-navy mb-6">{t('story_title')}</h2>
            <p className="text-navy/70 leading-relaxed">{t('story')}</p>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/logistics-2.jpg" alt="Our story" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            { title: t('mission_title'), text: t('mission') },
            { title: t('vision_title'), text: t('vision') },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-2 h-8 bg-gold rounded-full mb-4" />
              <h3 className="font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-navy/65 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-navy text-center mb-10">Değerlerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map(v => (
              <div key={v.title} className="text-center p-6 rounded-2xl bg-navy/5">
                <div className="w-2 h-2 bg-gold rounded-full mx-auto mb-3" />
                <h4 className="font-semibold text-navy mb-2">{v.title}</h4>
                <p className="text-navy/55 text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white mb-10">{t('why_us_title')}</h2>
          <ul className="space-y-4 text-left inline-block">
            {whyUs.map(item => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-gold flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
