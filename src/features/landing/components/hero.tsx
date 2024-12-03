import Link from 'next/link'
import { Button } from 'ui'

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />
            <div className="container px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                        Your All-in-One
                        <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                            {' '}
                            Solution
                        </span>
                    </h1>
                    <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
                        Streamline your workflow, boost productivity, and achieve more with our comprehensive platform.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" >
                            <Link href="/auth/register">Get Started</Link>
                        </Button>
                        <Button size="lg" variant="outline" >
                            <Link href="/demo">View Demo</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 
