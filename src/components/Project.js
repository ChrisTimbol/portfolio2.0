import React from 'react';
import Image from 'next/image'
/* Project in a container for displaying in a List Of Projects */
export default function Project() {
    return (
        <div className="border border-slate-500 space-y-2 p-2"> {/* Project Container */}
            <Image src="/example.png"
                width={"500"} height={"600"}
                alt="Picture of Project">
            </Image>
            <h1>Project Title</h1>
            <p>
                Description of project area lorem ipsum
                content with description yes we love lofi hiphop music
            </p>
        </div>
    )
}