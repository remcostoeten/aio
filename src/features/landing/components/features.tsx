/**
 * @author Remco Stoeten
 * @description Landing page features section
 */

import { BookOpen, Database, Lock } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        All-in-One Development Tools
                    </h2>
                    <p className="text-muted-foreground">
                        We provide the tools you need to succeed in today&apos;s fast-paced world.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="p-6 rounded-lg border">
                            <feature.icon className="w-10 h-10 mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const features = [
    {
        title: 'Authentication',
        description: 'Secure user authentication with role-based access control.',
        icon: Lock
    },
    {
        title: 'Database Management',
        description: 'Type-safe database operations with Drizzle ORM.',
        icon: Database
    },
    {
        title: 'Documentation',
        description: 'Comprehensive documentation with MDX support.',
        icon: BookOpen
    }
] 
