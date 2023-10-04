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
            <div className="relative">
                <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />
            </div>
            <main className="min-h-screen p-4 h-full w-full space-y-16  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-50 relative ">
                <h2 className="text-4xl text-cyan-400 font-robotoSerif font-semibold ">Blog</h2>

                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li className="" key={post?.id}>
                            <Post
                                title={post?.title?.rendered}
                                slug={post?.slug}
                                date={post?.date}
                            />
                        </li>
                    ))}
                </ul>
            </main>
        </>

    )

}