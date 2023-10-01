import Image from 'next/image';
import Post from '@/components/Post';
import Link from 'next/link';

export default function Blog(props) {
    return (
        <>
            <Image alt="background wave" src="/triangleTop.svg" width={400} height={400} />

            <section className="p-4  bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 text-cyan-100 leading-loose ">
                <div className="justify-center flex flex-col  space-y-8">

                    <h2 className="pt-4 text-4xl sm:text-5xl font-robotoSerif text-white underline decoration-cyan-300 underline-offset-8 ">
                        Latest post
                    </h2>

                    <ul className="grid grid-cols-1 md:grid-cols-2 ">
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

                    <Link href="/work" className="text-white text-sm text-end border border-cyan-800 p-4 ">
                        See More Post{" "}
                        <svg className="w-6 h-6 text-cyan-400 dark:text-white inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
  </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}