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


        </section>
    )
}