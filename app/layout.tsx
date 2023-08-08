import './globals.css'
import './fonts.css'
import type { Metadata } from 'next'
import { Footer, Header } from './components'
import { AdditionalThemeProvider } from './providers'

export const metadata: Metadata = {
  title: 'Błażej Bryła - Portfolio',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'mb-[100px] md:mb-0'}>
        <AdditionalThemeProvider>
          <Header />
          {children}
          <Footer />
        </AdditionalThemeProvider>
      </body>
    </html>
  )
}
