'use client'

import { cn } from '@/shared/helpers/utils'
import Link from 'next/link'
import { useState } from 'react'

type DocMeta = {
    title: string
    description: string
    slug: string
}

export default function DocsPage() {
    const [docs, setDocs] = useState<DocMeta[]>([
        {
            title: 'Validation',
            description: 'Guide to using the ValidationService for form and data validation',
            slug: 'validation'
        },
        {
            title: 'Database',
            description: 'Database schema and operations documentation',
            slug: 'database'
        },
        {
            title: 'Architecture',
            description: 'Application architecture and design patterns',
            slug: 'architecture'
        },
        {
            title: 'Mock Data',
            description: 'Working with mock data and testing',
            slug: 'mock'
        }
    ])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Documentation</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc) => (
                    <Link
                        key={doc.slug}
                        href={`/docs/${doc.slug}`}
                        className={cn(
                            'block p-6 rounded-lg border border-gray-200',
                            'hover:border-gray-300 transition-colors',
                            'dark:border-gray-800 dark:hover:border-gray-700'
                        )}
                    >
                        <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{doc.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
} 
