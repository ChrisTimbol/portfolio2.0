import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import fetchData from '@/components/Api';

export default async function Home() {
  const posts = await fetchData('http://portfoliosite.local/wp-json/wp/v2/posts?_embed', { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories', { next: { revalidate: false | 0 | 10 } })
  return (
    <>


      <main className="min-h-screen flex flex-col items-center relative "> {/* Use grid */}

        <section className="empty-hero-section pt-32"></section>

        <section className="space-y-8 w-full"> {/* MainContentBlogSection */}
          <h1 className="text-5xl">Latest Post</h1>
          <ul className="space-y-12">
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

        </section>

        <Sidebar categories={categories} />
      </main>

      <div className=""></div>
    </>
  )
}
