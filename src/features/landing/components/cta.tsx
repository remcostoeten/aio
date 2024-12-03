import Link from 'next/link'
import { Button } from 'ui'

export default function Cta() {
    return (
        <section className="py-20">
            <div className="container px-4">
                <div className="rounded-2xl bg-primary/10 px-8 py-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                        Join thousands of satisfied users who have already transformed their workflow.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" >
                            <Link href="/auth/register">Start Free Trial</Link>
                        </Button>
                        <Button size="lg" variant="outline" >
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 
