import { Check } from 'lucide-react'
import { Button } from 'ui'

const plans = [
    {
        name: 'Starter',
        price: '$9',
        features: ['Basic Features', '5 Projects', '2 Team Members', 'Basic Support'],
    },
    {
        name: 'Pro',
        price: '$29',
        features: ['Advanced Features', 'Unlimited Projects', '10 Team Members', 'Priority Support'],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '$99',
        features: ['All Features', 'Unlimited Everything', 'Dedicated Support', 'Custom Integration'],
    },
]

export default function Pricing() {
    return (
        <section className="py-20">
            <div className="container px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold">Simple, Transparent Pricing</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Choose the perfect plan for your needs. No hidden fees.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border p-8 ${plan.popular ? 'border-primary shadow-lg' : ''
                                }`}
                        >
                            {plan.popular && (
                                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                            <p className="mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground">/month</span>
                            </p>
                            <ul className="mb-6 space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 
