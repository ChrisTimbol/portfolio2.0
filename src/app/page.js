import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import fetchData from '@/components/Api';
import Image from 'next/image'
import Link from 'next/link'
export default async function Home() {
  const posts = await fetchData('http://portfoliosite.local/wp-json/wp/v2/posts?_embed', { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories', { next: { revalidate: false | 0 | 10 } })
  return (
    <>




      <main className="relative min-h-screen flex flex-col items-center justify-center">


        <div className="Hero Section w-full space-y-12">



          <div className="">


            <div className="NameContainer text-center ">
              <div className="text-2xl font-extrabold text-teal-500">Chris Timbol</div>
              <div className="text-xl  ">Web Developer &</div>
              <div className="text-xl  ">Design Enthusiast</div>
              <Image src="/example.png" width={400} height={400} />
              {/*               <Image src="myself.svg" width={500} height={100} className='' />
 */}
            </div>





          </div>

          <div className="border border-neutral-300 shadow-md bg-white cursor-pointer p-2 rounded-lg transition-transform hover:scale-105">

            <h2 className="text-xl font-semibold text-teal-500">About Me</h2>
            <div className="p-2 space-y-2">
              <p>
                Chris Timbol is from a small town called Eureka in California. Now resides in Sunny San Diego California.
              </p>
              <p>
                a dedicated web developer with a strong focus on front-end development and design.
              </p>
              <p>
                Specializes in React and Tailwind for rapid and optimal development.
              </p>
              <p>
                Master in crafting custom WordPress themes and plugins.
              </p>
              <p>
                pixel-perfect designs
              </p>
              <p>
                user-friendly interfaces for an exceptional user experience
              </p>
            </div>
          </div>
        </div>

        {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#115e59" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,208C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg> */}

        <section className=" w-full  " >
          <div className="spacer my-32"></div>
          <h2 className="text-4xl p-2  ">Latest Post</h2>
          <ul className="space-y-12 ">
            
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
