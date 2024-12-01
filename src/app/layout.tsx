import { monoFont } from '@/core/config/fonts'
import { metadata } from '@/core/config/metadata'
import '@/styles/app.css'

export { metadata }

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${monoFont.variable} font-mono antialiased`}>
				{children}
			</body>
		</html>
	)
}
