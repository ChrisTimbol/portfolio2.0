import fetchData from '@/components/Api';
import Image from 'next/image'
function getTimestamp() {
  return new Date().getTime();
}

export async function generateStaticParams() {
  try {
    const postsResponse = await fetch('http://portfoliosite.local/wp-json/wp/v2/posts').then((res) => res.json())
    const posts = postsResponse.map((post) => ({
      slug: post.slug,
    }));
    return [...posts]
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const timestamp = getTimestamp();
  const postApiUrl = `http://portfoliosite.local/wp-json/wp/v2/posts?slug=${slug}&timestamp=${timestamp}`;
  const postData = await fetchData(postApiUrl)

  return (
    <>
      <main className="min-h-72 p-8 bg-cyan-950 text-teal-100">
        <ul className="">
          {postData.map((data) => (

            <li key={data?.id} className="mb-8 border-b border-gray-300 pb-4">

              <h1 className="text-2xl font-bold mb-2">{data?.title?.rendered}</h1>
              <div
                className="text- font-roboto "
                dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
              />
            </li>

          ))}
        </ul>
      </main>

    </>
  );
}
