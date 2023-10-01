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
  const truncatedExcerpt = truncateExcerpt(props.excerpt, 10);



  return (
    <>
      <article className="cursor-pointer ">
        
        <Link href={props.slug} className=" hover:text-teal-400  hover:border-teal-400 flex items-start ">


          {props.thumbnail && ( /* Generate image only if it exist in API */
            <div className="w-1/3 h-20 relative m-2 p-4  ">
              <Image
                src={props.thumbnail}
                title={props.title}
                alt="Image for Post"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"

                className="rounded-xl h-full border border-teal-800"
              />
            </div>
          )}

          <div className=" p-2 w-11/12 ">
            <h3 className="text-xl text-teal-50 font-bold tracking-wide leading-6  font-robotoSerif ">{props.title}</h3>
            <span className="p-2 text-xs text-teal-600 pb-4">{formattedDate}</span>
            <span className="p-2 text-xs text-teal-600 pb-4">test{props.category}</span>

            <div className="text-sm text-gray-200 overflow-hidden w-full " dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />

          </div>

        </Link>

      </article>
      <hr></hr>
    </>
  )
}