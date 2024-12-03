import Cta from '@/features/landing/components/cta'
import Features from '@/features/landing/components/features'
import Hero from '@/features/landing/components/hero'
import Pricing from '@/features/landing/components/pricing'
import Testimonials from '@/features/landing/components/testimonials'

export default function LandingPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Hero />
			<Features />
			<Testimonials />
			<Pricing />
			<Cta />
		</div>
	)
}
