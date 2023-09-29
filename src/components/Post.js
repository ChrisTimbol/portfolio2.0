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
        
        <Link href={props.slug} className=" hover:text-green-500  flex items-start">


          {props.thumbnail && ( /* Generate image only if it exist in API */
            <div className="w-1/3 h-20 relative m-2 p-2  ">
              <Image
                src={props.thumbnail}
                title={props.title}
                alt="Image for Post"
                fill
                priority
                className="rounded-xl h-full"
              />
            </div>
          )}

          <div className=" p-2   w-11/12 ">
            <h3 className="text-xl font-bold tracking-wider leading-6  font-robotoSerif">{props.title}</h3>
            <span className="text-sm ">{formattedDate}</span>
            <span className="text-sm">{props.category}</span>

            <div className="text-sm text-gray-900 tracking-wide leading-8 overflow-hidden w-full " dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />

          </div>

        </Link>

      </article>
   
    </>
  )
}