/* Post that go into content.js container */
import React from 'react';

export default function Post(props) {
    return (
        <article className=" space-y-8 py-4 ">
        <h3 className="text-3xl font-semibold  ">{props.title}</h3>
        <div dangerouslySetInnerHTML={{__html: props.content}} />
        <div className="text-blue-500">Read More</div>
      </article>
    )
}