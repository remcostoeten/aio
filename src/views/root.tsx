'use client'

import { Link } from '@tanstack/react-router'
import { Code2 } from 'lucide-react'
import { siteConfig } from '../core/config/site'
import { publicRoutes } from '../routes'
import { Header } from '../components/header'

export default function RootPage() {
	return (
		<div className="min-h-screen bg-[#141414]">
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="space-y-8">
					<section className="bg-surface-light rounded-lg p-8 animate-fadeIn">
						<div className="flex items-center space-x-3 mb-6">
							<Code2 className="h-8 w-8 text-brand" />
							<h1 className="text-3xl font-bold text-white">
								{siteConfig.name}
							</h1>
						</div>
						<p className="text-gray-400 max-w-2xl">
							{siteConfig.description}
						</p>
					</section>

					<div className="grid md:grid-cols-2 gap-6">
						<Link
							to={publicRoutes.changelog.to}
							className="group bg-surface-light p-6 rounded-lg hover:bg-surface-dark transition-colors duration-200 animate-fadeInUp"
						>
							<h2 className="text-xl font-semibold text-white mb-2">
								Changelog
							</h2>
							<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
								Stay up to date with our latest updates and
								improvements.
							</p>
						</Link>

						<Link
							to={publicRoutes.roadmap.to}
							className="group bg-surface-light p-6 rounded-lg hover:bg-surface-dark transition-colors duration-200 animate-fadeInUp"
							style={{ animationDelay: '100ms' }}
						>
							<h2 className="text-xl font-semibold text-white mb-2">
								Roadmap
							</h2>
							<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
								Explore our future plans and upcoming features.
							</p>
						</Link>
					</div>

					<div
						className="flex gap-4 animate-fadeInUp"
						style={{ animationDelay: '200ms' }}
					>
						<a
							href={siteConfig.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-surface-light p-6 rounded-lg hover:bg-surface-dark transition-colors duration-200 flex-1"
						>
							<h2 className="text-xl font-semibold text-white mb-2">
								GitHub
							</h2>
							<p className="text-gray-400">
								Check out the source code and contribute.
							</p>
						</a>

						<a
							href={siteConfig.links.twitter}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-surface-light p-6 rounded-lg hover:bg-surface-dark transition-colors duration-200 flex-1"
						>
							<h2 className="text-xl font-semibold text-white mb-2">
								Twitter
							</h2>
							<p className="text-gray-400">
								Follow {siteConfig.creator.name} for updates.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
