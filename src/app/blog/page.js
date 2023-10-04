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
            <div className="relative h-64 w-full">
                <Image src="newWave.svg" className="object-cover" fill priority alt="About Wave" />
            </div>
            <main className="min-h-screen flex justify-center px-4 h-full w-full space-y-16  bg-slate-950 text-slate-50 relative ">
                <section className="px-4 max-w-screen-xl space-y-12 bg-slate-950 pb-12  w-full flex flex-col items-center justify-center ">

                <h2 className="text-5xl text-cyan-400 font-robotoSerif font-semibold text-center p-8">Latest Post</h2>
                                    <PostLoop posts={posts} />

                </section>
            </main>

        </>

    )

}