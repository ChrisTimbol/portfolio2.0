import fetchData from '@/components/Api';

// Function to generate a timestamp in milliseconds
function getTimestamp() {
  return new Date().getTime();
}

export async function generateStaticParams() {
  try {
    const [pagesResponse, postsResponse] = await Promise.all([
      fetch('http://portfoliosite.local/wp-json/wp/v2/pages').then((res) => res.json()),
      fetch('http://portfoliosite.local/wp-json/wp/v2/posts').then((res) => res.json()),
    ]);

    const pages = pagesResponse.map((page) => ({
      slug: page.slug,
    }));

    const posts = postsResponse.map((post) => ({
      slug: post.slug,
    }));

    // Combine pages and posts into a single array
    const combinedData = [...pages, ...posts];

    return combinedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default async function Page({ params }) {
  const { slug } = params;

  // Append a timestamp as a query parameter to the URL
  // Use this until 'no-cache' or 'revalidate' works properly
  const timestamp = getTimestamp();
  const pageApiUrl = `http://portfoliosite.local/wp-json/wp/v2/pages?slug=${slug}&timestamp=${timestamp}`;
  const postApiUrl = `http://portfoliosite.local/wp-json/wp/v2/posts?slug=${slug}&timestamp=${timestamp}`;
  
  const [pageData, postData] = await Promise.all([
    fetchData(pageApiUrl),
    fetchData(postApiUrl),
  ]);

  // Combine pageData and postData into a single array
  const combinedData = [...pageData, ...postData];

  return (
    <>
      <ul className="w-full min-h-screen">
        {combinedData.map((data) => (
          <li key={data?.id}>
            <h1>{data?.title?.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
          </li>
        ))}
      </ul>
    </>
  );
}
