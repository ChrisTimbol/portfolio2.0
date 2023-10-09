import React from 'react';
import Link from 'next/link'
export default function Sidebar({ posts }) {
    return (
        <aside className="text-slate-50  rounded-lg p-4   " >
            <h2 className="text-2xl text-cyan-500">Additional Post</h2>
            <ul className="list-none rounded-lg  font-roboto px-4 tracking-wider">
                {posts?.map((post) => (
                    <li
                        key={post.id}
                        className="hover:text-cyan-600 font-robotoSerif cursor-pointer w-full">
                        <Link href={`/blog/${post.slug}`}>
                            <span className="text-cyan-500">
                                {'-> '}
                            </span>
                            {post.title.rendered}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}



