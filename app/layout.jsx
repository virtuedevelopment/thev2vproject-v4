import { Mohave } from 'next/font/google'
import configurations from '@/_data/config'
import './globals.css'

const mohave = Mohave({ subsets: ['latin'] })

export const metadata = {
  title: configurations.SEO.title,
  description: configurations.SEO.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mohave.className}>{children}</body>
    </html>
  )
}
