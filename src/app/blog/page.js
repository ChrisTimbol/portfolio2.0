import PostLoop from '@/components/PostLoop'
import fetchData from '@/components/Api';
import Image from 'next/image'
import Post from '@/components/Post';

export default async function Blog() {
    function getTimestamp() {
        return new Date().getTime();
    }
    const timestamp = getTimestamp();
    const posts = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/posts?_embed&timestamp=${timestamp}`, { next: { revalidate: false | 0 | 10 } })

    return (
        <>
            <main className="min-h-screen flex justify-center px-4 h-full w-full space-y-16  bg-slate-950 text-slate-50 relative ">

<section className="px-4 space-y-12 bg-slate-950 pb-12  w-full flex flex-col items-center justify-center ">

<h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold text-center pt-8">Latest Post</h2>       
   <div className=" max-w-screen-lg ">
    <PostLoop posts={posts} />
  </div>
</section>

</main>

        </>

    )

}