import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* 
Root Layout (required)
 -Applies to all routes
 - This layout enables you to modify the initial HTML returned from the server.
 - App directory must include it
 - must define <html> and <body> since nextjs doesn't automatically create them.  
 - use the built in SEO suppor to manage <head> html elements ex: <title>
 - Only the root layout can contain <html> and <body> tags.
*/
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="m-2">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
