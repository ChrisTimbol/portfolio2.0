/* Post that go into content.js container */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Post(props) {

  // Function to format the date as "Month Day, Year"
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Function to truncate the excerpt to a specified number of words
  const truncateExcerpt = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ');
    } else {
      return text;
    }
  };


    // Format the date
    const formattedDate = formatDate(props.date);
  // Limit the excerpt to 20 words
  const truncatedExcerpt = truncateExcerpt(props.excerpt, 12);



  return (
<article className="border border-neutral-300 shadow-md bg-white cursor-pointer p-2 rounded-lg transition-transform hover:scale-105">   
<Link href={props.slug} className="text-blue-500 hover:text-blue-500 space-y-2">

      <div className="w-full h-64 relative rounded-lg overflow-hidden border border-gray-300">
        {props.thumbnail && ( /* Generate image only if it exist in API */
          <Image
            src={props.thumbnail}
            title={props.title}
            alt="Image for Post"
            fill 
            priority
          />
        )}
      </div>

      <h3 className="text-2xl font-semibold text-gray-900">{props.title}</h3>

      <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />
      <div className="">{formattedDate}</div>
      </Link>
    </article>
  )
}