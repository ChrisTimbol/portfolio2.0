/* Post that go into content.js container */
import React from 'react';
import Image from 'next/image'
export default function Post(props) {
  return (
    <article className="border border-gray-600 cursor-pointer space-y-2 ">

      <div className="w-full h-52 relative">
        {props.thumbnail && ( /* Generate image only if it exist in API */
          <Image
            src={props.thumbnail}
            title={props.title}
            alt="Image for Post"
            unoptimized /* Optimize w/ loader later */
            fill
            priority
          />
        )}
      </div>

      <h3 className="text-3xl font-semibold">{props.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
      <div className="text-slate-500 ">{'Continue Reading..'}</div>
    </article>
  )
}