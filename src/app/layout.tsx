import { monoFont } from '@/core/config/fonts'
import { metadata } from '@/core/config/metadata'
import { Locale, locales } from '@/core/config/next-intl.config'
import Navbar from '@/features/layout/components/navbar'
import '@/styles/app.css'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from 'sonner'

export { metadata }

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: { locale: Locale }
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  const messages = (await import(`@/core/messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body className={`${monoFont.variable} font-mono antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="container mx-auto mt-16 px-4">
            {children}
          </main>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}