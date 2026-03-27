'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function ContactPage() {
  const t = useTranslations('contact')
  const tf = useTranslations('contact.fields')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-16">
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-bold text-white mb-4">{t('hero_title')}</h1>
          <p className="text-white/65">{t('hero_subtitle')}</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="font-bold text-navy mb-6">{t('form_title')}</h2>
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                <p className="text-navy font-semibold">{tf('success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: tf('name'), type: 'text', required: true },
                  { name: 'company', label: tf('company'), type: 'text', required: false },
                  { name: 'email', label: tf('email'), type: 'email', required: true },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('message')}</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3.5 rounded-xl hover:bg-navy-light transition-colors"
                >
                  <Send size={16} />
                  {tf('submit')}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy mb-5">{t('info_title')}</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: t('email') },
                  { icon: Phone, text: t('phone') },
                  { icon: MapPin, text: t('address') },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-navy/70 text-sm">
                    <Icon size={18} className="text-ocean flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold py-4 rounded-2xl hover:bg-[#20b858] transition-colors shadow-lg"
            >
              <MessageCircle size={22} fill="white" />
              {t('whatsapp_cta')}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
