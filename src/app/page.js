import Sidebar from '@/components/Sidebar'
import Post from '@/components/Post'
import fetchData from '@/components/Api';
import Image from 'next/image'

export default async function Home() {
  const posts = await fetchData('http://portfoliosite.local/wp-json/wp/v2/posts?_embed', { next: { revalidate: false | 0 | 10 } })
  const categories = await fetchData('http://portfoliosite.local/wp-json/wp/v2/categories', { next: { revalidate: false | 0 | 10 } })
  return (
    <>




<main className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("peaks.svg")' }}>


        <div className="p-2 Hero Section w-full space-y-12">



          <div className="relative border border-neutral-300 shadow-md bg-white cursor-pointer p-2 rounded-lg transition-transform hover:scale-105">
       
            {/*   <Image src="peaks.svg" fill className="w-full h-full z-10 left-0 top-0 bottom-0 right-0"/> */}
     
            <div className="NameContainer text-center">
              <div className="text-3xl font-extrabold text-teal-500">Chris Timbol</div>
              <div className="text-xl  ">Web Developer &</div>
              <div className="text-xl  ">Design Enthusiast</div>

            </div>

            <Image src="myself.svg" width={900} height={900} className='' />


        

          </div>

          <div className="border border-neutral-300 shadow-md bg-white cursor-pointer p-2 rounded-lg transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-teal-500">About Me</h2>
            <p>
              Chris Timbol is a dedicated web developer with a strong focus on front-end development and design.
            </p>
            <p>
              Specializes in React and Tailwind CSS for rapid and optimal development.
            </p>
            <p>
              Proficient in crafting custom WordPress themes and plugins.
            </p>
            <p>
              Achieves pixel-perfect designs and prioritizes user-friendly interfaces for an exceptional user experience.
            </p>

          </div>
          <div class="ImageContainer text-center absolute bottom-0 left-0 right-0 transform translate-y-full opacity-0 transition-transform transition-opacity hover:translate-y-0 hover:opacity-100 hover:duration-300">
            <img src="your-image-url.jpg" alt="Christopher Timbol" class="w-32 h-32 rounded-full mx-auto border-4 border-white hover:border-teal-500 transition-border transition-duration-300 animate__animated animate__fadeIn animate__delay-5s" />
          </div>
        </div>

 {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#115e59" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,208C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg> */}

        <section className=" w-full  " >

          <h1 className="text-5xl p-2 text-white">Latest Post</h1>
          <ul className="space-y-12 ">
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


    </>
  )
}
