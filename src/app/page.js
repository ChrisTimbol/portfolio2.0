/* Default home page 
  -page.js is used as default for directory 
*/
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import Content from '@/components/Content'
export default function Home() {
  return (
    <>
      <main className="pt-32 flex flex-col items-center border border-slate-500 space-y-16 "> {/* Use grid */}
        <Content />
        <Sidebar />
      </main>
      <div className=""></div> {/* Subscribe to newsletter area*/}
      <Footer />
    </>
  )
};