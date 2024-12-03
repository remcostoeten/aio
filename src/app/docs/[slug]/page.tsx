/**
 * @author Remco Stoeten
 * @description Dynamic documentation page component
 */

import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { join } from 'path'

type Props = {
    params: {
        slug: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
}

type FrontMatter = {
    title: string
    description: string
}

/**
 * Renders a documentation page from MDX content
 * @param {Props} props - Page parameters including slug
 * @returns {Promise<JSX.Element>} Rendered documentation page
 */
export default async function DocPage({ params }: Props) {
    const { slug } = params

    try {
        const filePath = join(process.cwd(), 'docs', `${slug}.mdx`)
        const fileContent = readFileSync(filePath, 'utf-8')
        const parsed = matter(fileContent)

        // Validate frontmatter
        if (!parsed.data.title || !parsed.data.description) {
            throw new Error(`Missing required frontmatter in ${slug}.mdx`)
        }

        const data: FrontMatter = {
            title: parsed.data.title,
            description: parsed.data.description
        }

        return (
            <article className="container mx-auto px-4 py-8 prose dark:prose-invert max-w-none">
                <h1>{data.title}</h1>
                <div className="text-gray-600 dark:text-gray-400 mb-8">
                    {data.description}
                </div>
                <MDXRemote source={parsed.content} />
            </article>
        )
    } catch (err: unknown) {
        console.error(`Failed to load documentation for ${slug}:`, err)
        notFound()
    }
} 
