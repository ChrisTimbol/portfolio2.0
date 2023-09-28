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
    <article className="border border-teal-800  shadow-md bg-white cursor-pointer p-2 rounded-lg transition-transform hover:scale-105">
      <Link href={props.slug} className=" hover:text-blue-500  flex ">

        <div className="w-5/6 h-32 relative rounded-lg  border border-teal-600 ">
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
        <div className="mx-1">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <span className="text-sm">{formattedDate}</span>

          <div className="text-sm text-gray-900" dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />

        </div>
      </Link>
    </article>
  )
}