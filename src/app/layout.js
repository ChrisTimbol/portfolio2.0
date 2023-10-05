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
        <div className="py-16 bg-slate-800 text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4 text-center">Headline</h1>
          <p className="text-xl text-center mb-8 max-w-md">Description</p>
        </div>
        {children}
        <Gotopbutton /> 
        <Footer />
      </body>
    </html>
  )
}
