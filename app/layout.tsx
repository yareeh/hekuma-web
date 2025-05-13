import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hekuma MTB - Naisten maastopyöräilyseura Helsingissä',
  description: 'Hekuma edistää naisten maastopyöräilyä, tasa-arvoistaa lajia ja madaltaa kynnystä kokeilla sitä. Aktiivinen mimmilenkkiporukka perusti Hekuma MTB ry:n syksyllä 2023. Järjestämme yhteislenkkejä eri puolilla pääkaupunkiseutua läpi vuoden.',
  keywords: ['maastopyöräily', 'mtb', 'naiset', 'helsinki', 'pyöräily', 'yhteislenkit', 'hekuma'],
  authors: [{ name: 'Hekuma MTB' }],
  creator: 'Hekuma MTB',
  publisher: 'Hekuma MTB',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Hekuma MTB - Naisten maastopyöräilyseura Helsingissä',
    description: 'Hekuma edistää naisten maastopyöräilyä, tasa-arvoistaa lajia ja madaltaa kynnystä kokeilla sitä. Aktiivinen mimmilenkkiporukka perusti Hekuma MTB ry:n syksyllä 2023. Järjestämme yhteislenkkejä eri puolilla pääkaupunkiseutua läpi vuoden.',
    url: 'https://hekumamtb.fi',
    siteName: 'Hekuma MTB',
    images: [
      {
        url: 'https://hekumamtb.fi/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hekuma MTB - Naisten maastopyöräilyseura',
      }
    ],
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hekuma MTB - Naisten maastopyöräilyseura Helsingissä',
    description: 'Hekuma edistää naisten maastopyöräilyä, tasa-arvoistaa lajia ja madaltaa kynnystä kokeilla sitä. Aktiivinen mimmilenkkiporukka perusti Hekuma MTB ry:n syksyllä 2023. Järjestämme yhteislenkkejä eri puolilla pääkaupunkiseutua läpi vuoden.',
    images: ['https://hekumamtb.fi/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hekumamtb.fi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}