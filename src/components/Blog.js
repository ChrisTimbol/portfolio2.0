import Image from 'next/image';
import Post from '@/components/Post';
import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
export default function Blog(props) {
    return (
        <>
            <Image alt="background wave" src="/triangleTop.svg" width={400} height={400} />

            <section className="p-4 bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 text-cyan-100  ">


                <h2 className="py-4 text-4xl sm:text-5xl font-robotoSerif text-white underline decoration-cyan-300 underline-offset-8 ">
                    Latest post
                </h2>

                <ul className="">
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

                <AnimatedLink />

            </section>
        </>
    );
}