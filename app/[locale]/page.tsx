import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesBento } from '@/components/sections/ServicesBento'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { TrustSection } from '@/components/sections/TrustSection'
import { ReferenceLogos } from '@/components/sections/ReferenceLogos'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ServicesBento />
      <QuoteForm />
      <ProcessTimeline />
      <TrustSection />
      <ReferenceLogos />
      <CTABanner />
    </main>
  )
}
