import fetchData from '@/components/Api';

// Function to generate a timestamp in milliseconds
function getTimestamp() {
  return new Date().getTime();
}

export async function generateStaticParams() {
  const posts = await fetch('http://portfoliosite.local/wp-json/wp/v2/pages', {
    next: { revalidate: false | 0 | 10 },
  }).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;

  // Append a timestamp as a query parameter to the URL
  const timestamp = getTimestamp();
  const apiUrl = `http://portfoliosite.local/wp-json/wp/v2/pages?slug=${slug}&timestamp=${timestamp}`;

  const pageData = await fetchData(apiUrl, {
    next: { revalidate: false | 0 | 10 },
  });

  return (
    <>
      <ul className="w-full min-h-screen">
        {pageData.map((data) => (
          <li key={data?.id}>
            <h1>{data?.title?.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
          </li>
        ))}
      </ul>
    </>
  );
}