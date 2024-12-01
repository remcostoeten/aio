import type { Metadata } from 'next'
import { siteConfig } from './site'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	description: siteConfig.description,
	keywords: ['all-in-one', 'development', 'tools', 'utilities'],
	authors: [
		{
			name: siteConfig.creator.name,
			url: `https://github.com/${siteConfig.creator.github}`
		}
	],
	creator: siteConfig.creator.name,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		creator: `@${siteConfig.creator.twitter}`
	},
	icons: {
		icon: '/favicon.ico'
	}
}
