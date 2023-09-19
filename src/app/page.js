/* Default home page 
  -page.js is used as default for directory 
*/
import Header from "@/components/Header"
import Post from '@/components/Post'
export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-32 flex flex-col items-center border border-red-500  "> {/* Use grid */}
        <section className="space-y-4">
          <h1 className="text-5xl">Latest Post</h1>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>  {/* Latest Blog */}




        <section className=""></section> {/* Categories */}
        <section className=""></section> {/* Must Reads */}
      </main>


      <div className=""></div> {/* Subscribe to newsletter area*/}
      <footer className=""></footer> {/* NameLogo,  Exiting statement  Links to categories of blogs, media icons, terms of use, privacy policy , Copyright all right reserve*/}
    </>
  )
};