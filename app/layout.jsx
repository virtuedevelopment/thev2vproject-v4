import { Rubik } from 'next/font/google'
import configurations from '@/_data/config'
import Announcement from './Components/announcment-bar/Announcement'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'], weight:['400', '700'] })
export const metadata = {
  title: configurations.SEO.title,
  description: configurations.SEO.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Announcement/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
