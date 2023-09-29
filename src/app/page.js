import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import fetchData from '@/components/Api';
import Image from 'next/image'
import Link from 'next/link'
import Intro from '@/components/Intro'
export default async function Home() {

  function getTimestamp() {
    return new Date().getTime();
  }
  
  const timestamp = getTimestamp();
  const posts = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/posts?_embed&timestamp=${timestamp}`, { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories', { next: { revalidate: false | 0 | 10 } })
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="Hero Section w-full space-y-12 z-20">

          <Intro />
          <div className=" p-2 ">

            <h2 className="text-xl font-semibold text-teal-500">About Me</h2>
            <ul className="space-y-4 w-11/12">
              <li className="hover:gray-400">
                Chris Timbol resides in Sunny San Diego California.
              </li>
              <li>
                a dedicated web developer with a strong focus on front-end development and web design.
              </li>
              <li>
                Specializes in React and Tailwind for rapid and optimal development.
              </li>
              <li>
                Master in crafting custom WordPress themes and plugins.
              </li>
              <li>
                pixel-perfect designs
              </li>
              <li>
                user-friendly interfaces for a promising user experience
              </li>
              </ul>
            
          </div>
        </div>

        {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#115e59" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,208C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg> */}

        <section className=" w-full  " >
          <div className="spacer my-32"></div>
          <h2 className="text-4xl p-2  ">Latest Post</h2>
          <ul className=" ">

            {posts.map((post) => (
              <li key={post?.id}>
                <Post
                  title={post?.title?.rendered}
                  thumbnail={post?._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                  excerpt={post?.excerpt?.rendered}
                  slug={post?.slug}
                  date={post?.date}
                />
              </li>
            ))}
          </ul>
          <Link className="hover:bg-teal-500 cursor-pointer p-4" href="/blog">{"See More->"}</Link>
        </section>
        <div className="spacer my-32 "></div>
        <Sidebar categories={categories} />
      </main>


    </>
  )
}
