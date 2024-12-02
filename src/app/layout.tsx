import { monoFont } from '@/core/config/fonts'
import { metadata } from '@/core/config/metadata'
import '@/styles/app.css'
import { Toaster } from 'sonner'

export { metadata }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monoFont.variable} font-mono antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
