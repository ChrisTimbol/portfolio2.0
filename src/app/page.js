import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import Image from 'next/image'

export async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export default async function Home() {
  const posts = await fetchData('http://portfoliosite.local/wp-json/wp/v2/posts?', { cache: 'no-store' })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories')

  return (
    <div className="">
{/*       <div className="absolute inset-0 z-0 grayscale-[100%]">
        <Image
          src="/baseTree.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div> */}

      <main className="pt-32 flex flex-col items-center relative"> {/* Use grid */}
        <section className="space-y-10 w-full"> {/* MainContentBlogSection */}
          <h1 className="text-5xl">Latest Post</h1>
          <ul className="">
            {posts.map((post) => (
              <Post
                key={post.id}
                title={post.title.rendered}
                content={post.content.rendered}
              />
            ))}
          </ul>
        </section>

        <Sidebar categories={categories} />
      </main>

      <div className=""></div> {/* newsletter signup*/}
    </div>
  )
}
