import fetchData from '@/components/Api';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('http://portfoliosite.local/wp-json/wp/v2/pages').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,


  }))
}

/* Fetch for single page data 
  - Use post.slug in fetch request to get title content etc
*/
// { cache: 'no-store' } for fetches because..

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  const { slug } = params
  const posts = await fetchData('http://portfoliosite.local/wp-json/wp/v2/pages')
  return (
    <>
      <ul className="w-full">
        {posts.map((post) => (
          <li key={post?.id}>
            <h1>{post?.title?.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
          </li>
        ))}
      </ul>

    </>
  )
  // ...
}