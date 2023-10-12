import React from 'react';
import Link from 'next/link'
export default function Sidebar({ posts }) {
    return (
        <aside className="text-slate-200 rounded-lg p-4" >
            <h2 className="text-2xl tracking-wide text-slate-200">Additional Post</h2>
            <ul className="min-h-screen list-none rounded-lg  font-roboto  ">
                {posts?.map((post) => (
                    <li
                        key={post.id}
                        className="hover:text-cyan-500 font-robotoSerif cursor-pointer w-full ">
                        <Link href={`/blog/${post.slug}`}>
                            <span className="text-cyan-400 pr-2">
                                {'->  '}
                            </span>
                            {post.title.rendered} 
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}



