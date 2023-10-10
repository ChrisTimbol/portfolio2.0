import fetchData from '@/components/Api';
import Sidebar from '@/components/Sidebar'
function getTimestamp() {
  return new Date().getTime();
}


export async function generateStaticParams() {
  try {
    const postsResponse = await fetch('http://api.timbol.dev/wp-json/wp/v2/posts').then((res) => res.json())
    const posts = postsResponse?.map((post) => ({
      slug: post.slug,
    }));

    return [...posts]

  } catch (error) {
    console.error('Error fetching post', error);
    throw error;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const timestamp = getTimestamp();
  const postApiUrl = `http://api.timbol.dev/wp-json/wp/v2/posts?slug=${slug}&timestamp=${timestamp}`;
  const postData = await fetchData(postApiUrl)

  return (
    <>
      <main className="flex justify-center items-center w-full h-full  bg-slate-950 text-slate-100  ">
        <section className="flex h-full  flex-col md:flex-row justify-center    min-h-screen max-w-screen-md text-lg tracking-wider  p-4  ">

          {postData.map((data) => (
            <div key={data?.id} className="w-full mb-8 border-b border-gray-300 pb-4">
              <h1 className="text-5xl md:text-5xl text-center text-slate-100  font-robotoSerif font-semibold py-6 w-full">
                {data?.title?.rendered}
              </h1>
              <div className="p-4 " dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
            </div>
          ))}

        {/*   <Sidebar />  */}
         {/* Table of contents */}
        </section>
      </main>
    </>
  );
}