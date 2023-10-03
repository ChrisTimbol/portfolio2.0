
import fetchData from '@/components/Api';
import Blog from '@/components/Blog'

export default async function Home() {

  function getTimestamp() {
    return new Date().getTime();
  }

  const timestamp = getTimestamp();
  const posts = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/posts?_embed&timestamp=${timestamp}`, { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories', { next: { revalidate: false | 0 | 10 } })
  return (
    <>
      <main className=" relative min-h-screen flex flex-col items-center justify-center bg-cyan-950">
        <Blog posts={posts} />
      </main>
    </>
  )
}

