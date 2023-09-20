import React from 'react';

import Link from 'next/link';
export default function Sidebar(props) {
    return (
        <section className="sidebar w-full">

            <section className="">
                <h2 className="text-4xl">Best Categories</h2>
                <ul className="flex space-x-4 flex-wrap "> {/* Query Loop of diff categories */}
                    {props.categories.map((category) => (
                        <li><Link className="" href="">{category.name}</Link></li>
                    ))}

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