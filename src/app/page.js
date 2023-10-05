import fetchData from '@/components/Api';
import PostLoop from '@/components/PostLoop'
import Image from 'next/image'
import Link from 'next/link'
import { BlogLink } from '@/components/Icons';

export default async function Home() {
  function getTimestamp() {
    return new Date().getTime();
  }

  const timestamp = getTimestamp();
  const posts = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/posts?_embed&timestamp=${timestamp}`, { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories', { next: { revalidate: false | 0 | 10 } })

  return ( 
    <>
      <main className="flex justify-center  w-full h-full  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-50  ">

        <section className=" w-full h-full min-h-screen max-w-screen-xl flex flex-col items-center py-16 ">
          <h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold py-16 px-4 border border-slate-700 w-full">Latest Post</h2>


         
            <PostLoop posts={posts} />
          
          <Link className="text-cyan-50 flex justify-end font-semibold w-full  border border-cyan-500 rounded-lg p-4 hover:text-cyan-400 text-lg md:w-3/4 lg:w-1/2 md:text-xl lg:text-2xl " href="/blog">
            Read More  <BlogLink />
          </Link>
        </section>

      </main>
    </>
  )
}
