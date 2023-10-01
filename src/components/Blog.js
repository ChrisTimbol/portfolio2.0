import Image from 'next/image'
import Post from '@/components/Post'
import Link from 'next/link'
export default function Blog(props) {
    
    return (
        <>
            <Image alt="just waves in background image" src="/wave2.svg" width={400} height={400} />
            <section className="p-2 w-full bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900  shadow-lg ">

                <h2 className="text-4xl font-bold text-white  font-robotoSerif mb-6 underline underline-offset-8 decoration-teal-300">Latest post</h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {props.posts.map((post) => (
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
            <Image alt="just waves in background image" src="/PostWave.svg" width={400} height={400} />
        </>
    )
}