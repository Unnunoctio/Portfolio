import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Rafael Carvacho | Portfolio',
  description: 'Rafael Carvacho\'s portfolio website'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang='en'>
      <body className={`${roboto.className} bg-bg-home`}>
        {children}
      </body>
    </html>
  )
}
