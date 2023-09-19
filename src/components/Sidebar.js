import React from 'react';

import Link from 'next/link';
export default function Sidebar() {
    return (
        <section className="sidebar w-full">

            <section className="">
                <h2 className="text-4xl">Best Categories</h2>
                <ul className="flex space-x-4 "> {/* Query Loop of diff categories */}
                    <li><Link className="" href="">React</Link></li>
                    <li><Link className="" href="">Nextjs</Link></li>
                    <li><Link className="" href="">wordpress</Link></li>
                    <li><Link className="" href="">tailwind</Link></li>
                    <li><Link className="" href="">reads</Link></li>
                </ul>
            </section>

            <section className="">
                <h2>Other Related Post</h2>
                <ul className=""> {/* Other Links to post from query loop */}
                    <li>Wordpress Tloremyes thisfridgeratore</li>
                    <li>lorem Title yes tdoorway answer</li>
                    <li>loremloremle y one</li>
                    <li>Wordpress Title yes this one</li>
                    <li> Title yes this lorem one</li>
                    <li>lorem Title loremlorem this one</li>
                </ul>
            </section>
        </section>
    )
}