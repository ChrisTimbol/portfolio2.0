
import fetchData from '@/components/Api';
import Blog from '@/components/Blog'
import Image from 'next/image'
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
        <Blog posts={posts} />
      </main>
    </>
  )
}

