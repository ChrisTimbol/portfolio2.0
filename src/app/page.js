import fetchData from '@/components/Api';
import PostLoop from '@/components/PostLoop'
import Image from 'next/image'
import Link from 'next/link'
import { BlogLink } from '@/components/Icons';
import Sidebar from '@/components/Sidebar'
export default async function Home() {
  function getTimestamp() {
    return new Date().getTime();
  }

  const timestamp = getTimestamp();
  const posts = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/posts?_embed&timestamp=${timestamp}`, { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/categories`, { next: { revalidate: false | 0 | 10 } })

  return (
    <>
      <main className="flex justify-center bg-gradient-to-b w-full h-full from-slate-950 via-slate-900 to-slate-900 text-slate-50">

        <section className="flex flex-wrap  w-full justify-center h-full  max-w-screen-xl  pb-8 ">
        <h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold p-4  w-full">Latest Post</h2>

          <div className="w-full lg:w-2/3 px-4 ">

            <PostLoop posts={posts} />
          </div>

          <div className="w-full lg:w-1/3 h-full p-4">

            <Sidebar categories={categories} posts={posts}/>
          </div>

        </section>

        {/*         <Link className="text-cyan-50 p-4 border-2 font-semibold items-center justify-center   rounded-lg  my-16  hover:text-cyan-400 text-lg  md:text-xl  " href="/blog">
            Read More  <BlogLink />
          </Link> */}
      </main>
    </>
  )
}
