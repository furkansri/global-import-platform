import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { BRAND_NAME } from '@/lib/constants'
import { Ship, Shield, Award, Globe } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export async function Footer() {
  const t = await getTranslations('common')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/80">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center gap-8">
          {[
            { icon: Shield, label: 'ISO 9001 Kalite' },
            { icon: Award, label: 'SGS Sertifikalı' },
            { icon: Globe, label: 'IATA Üyesi' },
            { icon: Ship, label: 'SSL Güvenli' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-white/60">
              <Icon size={16} className="text-gold" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/logo_mark.png" alt={BRAND_NAME} width={32} height={32} className="object-contain" />
            <span className="text-white font-bold text-lg">{BRAND_NAME}</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Sayfalar</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: t('nav.home'), href: '/' as const },
              { label: t('nav.about'), href: '/hakkimizda' as const },
              { label: t('nav.services'), href: '/hizmetler' as const },
              { label: t('nav.contact'), href: '/iletisim' as const },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">İletişim</h4>
          <div className="space-y-2 text-sm text-white/60">
            <p>info@globalbridge.com</p>
            <p>+90 5XX XXX XX XX</p>
            <p>İstanbul, Türkiye</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/40">
          © {currentYear} {BRAND_NAME}. {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
