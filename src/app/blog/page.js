import fetchData from '@/components/Api';
import { FormatDate } from '@/components/FormatDate';
import Link from 'next/link'
export default async function Blog() {
    function getTimestamp() {
        return new Date().getTime();
    }

    const timestamp = getTimestamp();
    const posts = await fetchData(`http://portfoliosite.local/wp-json/wp/v2/posts?_embed&timestamp=${timestamp}`, {
        next: { revalidate: false | 0 | 10 }
    });

    return (
        <>
            <main className="flex justify-center  w-full h-full md:h-screen  bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-50  ">

                <section className=" w-full h-full min-h-screen max-w-screen-lg flex flex-col items-center py-16 ">
                    <h2 className="text-5xl  text-cyan-400 font-robotoSerif font-semibold py-16 px-4 border border-slate-700   w-full">Blog</h2>

                    <ul className="list-none w-full ">
                        {posts.map(post => (
                            <Link href={post.slug} className=" ">
                                <li className="p-4  group cursor-pointer" key={post.id}>
                                    <h2 className="group-hover:text-cyan-300  text-xl text-slate-50 font-bold font-robotoSerif">
                                        {post.title.rendered || 'No Title'}
                                    </h2>
                                    <span className="text-sm text-slate-600 rounded-full">{FormatDate(post.date)}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}
