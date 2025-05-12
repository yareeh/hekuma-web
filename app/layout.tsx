import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hekuma MTB - Naisten maastopyöräilyseura Helsingissä',
  description: 'Hekuma MTB on Helsinkiläinen naisten maastopyöräilyseura, joka tarjoaa hauskaa yhteisöllistä pyöräilyä kaikentasoisille harrastajille.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <body className={`${inter.className} bg-emerald-800`}>{children}</body>
    </html>
  )
}
