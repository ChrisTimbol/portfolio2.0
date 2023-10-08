import React from 'react';

import Link from 'next/link';
export default function Sidebar(props) {
    return (
        <aside className="text-slate-50  rounded-lg space-y-4" >
            <section className="" >
                <h2 className="text-3xl mb-2">Top Categories</h2>

                <ul className=" flex flex-wrap list-none text-sm ">
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif hover:bg-cyan-500 cursor-pointer transition duration-300">NextJs</li>
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif hover:bg-cyan-500 cursor-pointer transition duration-300">TailwindCSS</li>
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif hover:bg-cyan-500 cursor-pointer transition duration-300">Html</li>
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif hover:bg-cyan-500 cursor-pointer transition duration-300">Javascript</li>
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif hover:bg-cyan-500 cursor-pointer transition duration-300">Fitness</li>
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif hover:bg-cyan-500 cursor-pointer transition duration-300">Adobe</li>
                    <li className="m-1 px-2 py-2 bg-cyan-400 text-white rounded-lg font-robotoSerif  hover:bg-cyan-500 cursor-pointer transition duration-300">React</li>
                </ul>
                {/*                 <ul>
                    {topCategories.map((category) => (
                        <li key={category.id}>
                            <Link href={`/category/${category.slug}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul> */}
            </section>

            <section className="mb-4">
                <h2 className="text-3xl mb-2">Top Articles</h2>
                <ul className="  list-none text-base  font-roboto">
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">Should you learn tailwind?</li>
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">Post On A lion eating aasdasdsads tiger</li>
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">10 reasons why your a bad programmer</li>
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">Why you shouldn't do homework for your deads dog</li>
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">You got a problem then stoicism</li>
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">Sidebars are pointless do people even read this?</li>
                    <li className="text-base leading-6 mb-2 font-medium font-robotoSerif">Top 10 reasons programmers are crazy </li>
                </ul>

                {/*                     <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <Link href={`/${post.slug}`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul> 
*/}

            </section>

        </aside>
    )
}