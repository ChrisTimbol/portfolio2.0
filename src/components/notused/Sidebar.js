import React from 'react';

import Link from 'next/link';
export default function Sidebar(props) {
    return (
        <section className="sidebar w-full">

            <section className="border border-gray-600 py-4 space-y-8">
                <h2 className="text-4xl">Best Categories</h2>
                <ul className="flex flex-wrap  "> {/* Query Loop of diff categories */}
                    {props.categories.map((category) => (
                        <li key={category.id}
                            className="min-w-1/4 bg-gray-600 text-white rounded-xl p-2 m-1" >
                            <Link href="">{category.name}</Link>
                        </li>
                    ))}

                </ul>
            </section>


        </section>
    )
}