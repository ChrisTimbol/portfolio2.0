import Sidebar from '@/components/Sidebar'
import fetchData from '@/components/Api';
import Intro from '@/components/Intro'
import About from '@/components/About'
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
      <main className="relative min-h-screen flex flex-col items-center justify-center">
        <Intro />
        <About />
        <Blog posts={posts} />
        <Sidebar categories={categories} />
      </main>


    </>
  )
}

