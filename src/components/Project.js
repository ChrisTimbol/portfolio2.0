import React from 'react';
import Image from 'next/image';

/* Project in a container for displaying in a List Of Projects */
export default function Project(props) {
    return (
        <div className="min-w-full  border border-neutral-300 shadow-md bg-white cursor-pointer space-y-4 rounded-lg transition-transform hover:scale-105 relative">
            {/* Project Container */}
            <div className="h-96 relative rounded-lg overflow-hidden border border-gray-300 space-y-4">
                <Image
                    src="/example.png"
                    alt="Image for Post"
                    fill
                    priority
                />
                {/* Centered Title and Description */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
                    <h2 className="text-2xl font-semibold text-white"> {/* Change text color to white */}
                        {props.title}
                    </h2>
                    <p className="text-sm text-white"> {/* Change text color to white */}
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
