/* Default home page 
  -page.js is used as default for directory 
*/
import Header from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <div>Hero Section</div> 
      <main className=""> {/* Use grid */}
        <section className=""></section>  {/* Latest Blog */}
        <section className=""></section>  {/* Categories */}
        <section className=""></section> {/* Must Reads */}
      </main>
      <div>      {/* Subscribe to newsletter area*/}
      </div>
      <footer className=""></footer> {/* NameLogo,  Exiting statement  Links to categories of blogs, media icons, terms of use, privacy policy , Copyright all right reserve*/}
    </>
  )
};