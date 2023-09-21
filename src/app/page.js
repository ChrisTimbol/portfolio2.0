import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import fetchData from '@/components/Api';

export default async function Home() {
  const posts = await fetchData('http://portfoliosite.local/wp-json/wp/v2/posts?_embed', { cache: 'no-store' })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories')
  return (
    <>
      {/*       <div className="absolute inset-0 z-0 grayscale-[100%]">
        <Image
          src="/baseTree.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div> */}

      <main className="min-h-screen flex flex-col items-center relative"> {/* Use grid */}

        <section className="Just-a-spacer-section pt-32"></section>

        <section className="space-y-8 w-full"> {/* MainContentBlogSection */}
          <h1 className="text-5xl">Latest Post</h1>
          <ul className="space-y-12">
            {posts.map((post) => (
              <Post
                key={post?.id}
                title={post?.title?.rendered}
                thumbnail={post?._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                excerpt={post?.excerpt?.rendered}
              />
            ))}
          </ul>

        </section>

        <Sidebar categories={categories} />
      </main>

      <div className=""></div>
    </>
  )
}
