import Image from 'next/image';
import Post from '@/components/Post';
import Link from 'next/link';
import { BlogLink } from './Icons';
export default function Blog({ posts }) {
    return (
        <>
            <div className="relative">
                <Image src="aboutwav.svg" width={400} height={400} alt="About Wave" />
            </div>
            <section className="p-4 space-y-12 bg-gradient-to-b from-cyan-800 via-cyan-900 to-cyan-800   ">

                <h2 className="text-4xl text-rose-500 font-robotoSerif font-semibold ">Latest Post</h2>


                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li className="h-60" key={post?.id}>
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

                <Link className="text-cyan-100 flex justify-end  font-semibold w-full border border-cyan-500 rounded-lg p-4" href="/blog">
                    Read More <BlogLink />
                </Link>


            </section>
        </>
    );
}