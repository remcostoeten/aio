type SiteConfig = {
	name: string
	shortName: string
	description: string
	url: string
	links: {
		github: string
		twitter: string
	}
	creator: {
		name: string
		twitter: string
		github: string
	}
}

export const siteConfig: SiteConfig = {
	name: 'All In One Panel',
	shortName: "AIO",
	description:
		'An all-in-one application combining multiple tools and utilities',
	url: 'https://aio.remcostoeten.com',
	links: {
		github: "https://github.com/remcostoeten",
		twitter: "https://twitter.com/yowremco"
	},
	creator: {
		name: "Remco Stoeten",
		twitter: "https://twitter.com/yowremco",
		github: "https://github.com/remcostoeten"
	}
}
