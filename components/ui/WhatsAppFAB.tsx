'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { WHATSAPP_URL } from '@/lib/constants'

export function WhatsAppFAB() {
  const t = useTranslations('common')
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg"
    >
      <motion.div
        animate={{ boxShadow: ['0 0 0 0 rgba(37,211,102,0.7)', '0 0 0 14px rgba(37,211,102,0)'] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        className="absolute inset-0 rounded-full"
      />
      <MessageCircle size={26} className="text-white relative z-10" fill="white" />
    </motion.a>
  )
}
