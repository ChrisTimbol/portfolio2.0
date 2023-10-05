import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Roboto, Roboto_Serif, Roboto_Mono, Style_Script } from 'next/font/google'
import Gotopbutton from '@/components/Gotopbutton';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const stylescript = Style_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-stylescript',
})

const roboto_Serif = Roboto_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif',
})

const roboto_Mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-Mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${stylescript.variable} ${roboto_Serif.variable} ${roboto_Mono.variable}`}>
      <body className="font-roboto">

        <Header />
        {children}
        <Gotopbutton /> 
        <Footer />
      </body>
    </html>
  )
}
