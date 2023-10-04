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
      <div className="relative h-64 w-full">
        <Image src="newWave.svg" className="object-cover" fill priority alt="About Wave" />
      </div>
      <main className="">

        <section className="px-4 space-y-12 bg-slate-950 pb-12  w-full flex flex-col items-center justify-center ">

        <h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold text-center pt-8">Latest Post</h2>       
           <div className=" max-w-screen-lg ">
            <PostLoop posts={posts} />
          </div>
          <Link className="text-cyan-50 flex justify-end font-semibold w-full  border border-cyan-500 rounded-lg p-4 hover:text-cyan-400 text-lg md:w-3/4 lg:w-1/2 md:text-xl lg:text-2xl " href="/blog">
            Read More  <BlogLink />
          </Link>
        </section>

      </main>
    </>
  )
}
