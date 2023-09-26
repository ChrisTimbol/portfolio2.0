import React from 'react';
import Image from 'next/image'
/* Project in a container for displaying in a List Of Projects */
export default function Project(props) {
    return (
        <div className="border border-neutral-300 shadow-md bg-white cursor-pointer space-y-4 p-2 rounded-lg transition-transform hover:scale-105"> {/* Project Container */}
            <div className="w-full h-72 relative rounded-lg overflow-hidden border border-gray-300 space-y-4">
                <Image
                    src="/example.png"
                    alt="Image for Post"
                    fill
                    priority
                />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">
                {props.title}
            </h2>
            <p className="text-sm text-gray-600">
                {props.description}
            </p>
        </div>
    )
}