
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
      <main className=" h-full w-full  bg-gradient-to-b from-cyan-600 via-cyan-900 to-cyan-600 text-cyan-50 relative ">
        <div className="relative">
          <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />
        </div>
        <section className="p-4 space-y-12 bg-gradient-to-b from-cyan-800 via-cyan-900 to-cyan-800   ">

          <h2 className="text-4xl text-rose-500 font-robotoSerif font-semibold ">Latest Post</h2>
          <PostLoop posts={posts} />
          <Link className="text-cyan-100 flex justify-end  font-semibold w-full border border-cyan-500 rounded-lg p-4" href="/blog">
            Read More <BlogLink />
          </Link>


        </section>
      </main>
    </>
  )
}

