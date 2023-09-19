import './globals.css'
import Header from '@/components/Header'
/* 
Root Layout (required)
 -Applies to all routes
 - This layout enables you to modify the initial HTML returned from the server.
 - App directory must include it
 - must define <html> and <body> since nextjs doesn't automatically create them.  
 - use the built in SEO suppor to manage <head> html elements ex: <title>
 - Only the root layout can contain <html> and <body> tags.
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-2">
        <Header />
        {children}
      </body>
    </html>
  )
}
