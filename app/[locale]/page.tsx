import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesBento } from '@/components/sections/ServicesBento'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { TeamSection } from '@/components/sections/TeamSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ServicesBento />
      <QuoteForm />
      <ProcessTimeline />
      <TeamSection />
      <TestimonialsSection />
      <TrustSection />
      <FAQSection />
      <CTABanner />
    </main>
  )
}
