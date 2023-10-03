import Image from 'next/image';
import Post from '@/components/Post';
import Link from 'next/link';
import { BlogLink } from './Icons';
import { UpsideTriangle } from './Icons';
import { ArrowIcon } from './Icons';
export default function Blog(props) {
    return (
        <>
            <Image alt="background wave" src="/triangleTop.svg" width={400} height={400} />

            <section className="p-4 bg-gradient-to-b from-cyan-900 via-cyan-950 to-cyan-700 text-cyan-100  ">


                <h2 className="py-4 text-lg font-robotoSerif text-red-500 ">
                    LATEST POST
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

                <Link className="text-cyan-100 flex justify-end  font-semibold w-full border border-cyan-500 rounded-lg p-4" href="/blog">
                    Read More<BlogLink />
                </Link>


                       {/*  <ArrowIcon /> */}
            </section>
            <UpsideTriangle />
        </>
    );
}