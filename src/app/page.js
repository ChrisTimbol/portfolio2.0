import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import fetchData from '@/components/Api';
import Image from 'next/image'
import Link from 'next/link'
import Intro from '@/components/Intro'
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
        <Image src="/wave.svg" width={400} height={400} />

        <div className="p-6 space-y-4 bg-gradient-to-b from-teal-400 via-teal-400 to-teal-300  rounded-lg shadow-lg">

          <h2 className="text-4xl font-robotoSerif mb-6 text-teal-800">About Me</h2>


          <p className=" text-black ">
            Hi, I'm <span className="">Chris Timbol</span>,
            a passionate web developer based in sunny San Diego,
            California. I find joy in front-end development-
            the artful blend of functional logic in code,
            bringing designs to life, and creating something
            unique in this world.
          </p>
          <p className="text-teal-900 ">
            I thrive on translating user ideas into seamless digital experiences.

            There's a profound sense of fulfillment in knowing that I can bring joy to someone through my creations, adding a touch of uniqueness to their digital experiences.
          </p>



          <p className="text-teal-900">
            I excel in <span className="font-medium">React</span> and <span className="text-sm">Tailwind</span>, ensuring fast and elegant web solutions. My expertise extends to creating custom WordPress themes and plugins, delivering pixel-perfect designs and intuitive interfaces.
          </p>


          <a href="/work" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105">
            Explore My Work
          </a>

        </div>

        <Image src="/bottomwave.svg" width={400} height={400} />


        <Image src="/wave2.svg" width={400} height={400} />
        <section className="w-full bg-gradient-to-b from-teal-800 via-teal-950 to-teal-700  p-6 ">

          <h2 className="text-4xl text-teal-100 font-robotoSerif mb-6  ">Blog</h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

          <Link href="/blog" className="hover:bg-teal-500 cursor-pointer p-4 text-teal-50 block underline mt-6">
            {'See More ->'}
          </Link>

        </section>
        <Image src="/PostWave.svg" width={400} height={400} />

        <div className="spacer my-32 "></div>
        <Sidebar categories={categories} />
      </main>


    </>
  )
}
