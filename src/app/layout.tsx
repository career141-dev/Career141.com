import type { Metadata } from 'next'
import { Quicksand, Open_Sans, Poppins, Inter } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Career141 - Executive Search & Recruitment',
  description: 'Global Executive Search & Recruitment Excellence',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${openSans.variable} ${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <div style={{ overflowX: 'clip', position: 'relative' }}>
          {children}
        </div>
      </body>
    </html>
  )
}