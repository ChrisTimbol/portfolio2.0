import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



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

export default function Post(props) {
  const formattedDate = formatDate(props.date);
  // Limit the excerpt to 20 words
  const truncatedExcerpt = truncateExcerpt(props.excerpt, 10);



  return (
    <>
      <article className="cursor-pointer p-2  space-y-4   ">


        <Link href={props.slug} className=" hover:text-cyan-400  hover:border-cyan-400 flex items-start  ">


          {props.thumbnail && ( /* Generate image only if it exist in API */
            <div className="w-1/3 h-20 relative m-2 p-4  ">
              <Image
                src={props.thumbnail}
                title={props.title}
                alt="Image for Post"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="rounded-xl h-full border border-cyan-800"
              />
            </div>
          )}

          <div className="w-full">
            <h3 className="text-xl text-white font-bold leading-6 font-robotoSerif">{props.title}</h3>
            <div className=" space-x-2">
              <span className="text-base text-cyan-700 rounded-full">
                {formattedDate}
              </span>
              <span className="text-sm text-cyan-950 bg-cyan-500 p-1  rounded-full">
                {props.category} nextjs
              </span>
            </div>
            <div className="font-medium font-roboto text-base overflow-hidden w-full " dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />
          </div>


        </Link>

      </article>

    </>
  )
}