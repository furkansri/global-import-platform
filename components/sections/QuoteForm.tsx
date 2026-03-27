'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle } from 'lucide-react'

const CATEGORIES_TR = ['Elektronik', 'Tekstil', 'Mobilya', 'Makine & Ekipman', 'Gıda & Tarım', 'Hammadde', 'Tüketim Ürünleri', 'Diğer']

export function QuoteForm() {
  const t = useTranslations('home')
  const tf = useTranslations('home.quote_fields')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ product: '', category: '', quantity: '', name: '', company: '', phone: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="teklif" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-bold text-navy mb-3">{t('quote_title')}</h2>
          <p className="text-navy/60">{t('quote_subtitle')}</p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                <p className="text-navy font-semibold text-lg">{tf('success')}</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('product')} *</label>
                    <input
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      placeholder="Örn: Bluetooth kulaklık"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('category')} *</label>
                    <select
                      name="category"
                      required
                      value={form.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 bg-white"
                    >
                      <option value="">Seçin...</option>
                      {CATEGORIES_TR.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('quantity')} *</label>
                    <input
                      name="quantity"
                      required
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="Örn: 500 adet"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('name')} *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ad Soyad"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('company')}</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Şirket Adı (opsiyonel)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy/60 mb-1.5">{tf('phone')} *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-navy text-sm focus:outline-none focus:border-ocean focus:ring-1 focus:ring-ocean/30 bg-white"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white font-semibold py-4 rounded-xl hover:bg-navy-light transition-colors shadow-md mt-2"
                >
                  <Send size={18} />
                  {tf('submit')}
                </button>
                <p className="text-center text-xs text-navy/40 mt-2">
                  Uzmanlarımız 24 saat içinde sizinle iletişime geçer
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
