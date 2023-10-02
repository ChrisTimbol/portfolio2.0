import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <article className="cursor-pointer mb-8 p-4 bg-cyan-950 rounded-lg border border-cyan-500 shadow-md hover:scale-105 transition duration-300 hover:shadow-xl">
      <Link href={props.slug} className="hover:text-cyan-400">
        <h2 className="text-xl text-white font-bold font-robotoSerif mb-2">
          {props.title}
        </h2>
        {props.thumbnail && ( /* if thumbnail exist */
          <div className="flex">
            <div className="w-5/12 h-20 mr-4 relative flex items-end">
              <Image
                src={props.thumbnail}
                title={props.title}
                alt="Image for Post"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex space-x-2 mb-2 sm:mb-4 lg:mb-6">
                <span className="text-base text-cyan-700 rounded-full">
                  {formattedDate}
                </span>
                <span className="text-xxxs text-cyan-950 bg-cyan-400 p-1 rounded-full">
                  {props.category} nextjs
                </span>
              </div>
              <div className="font-medium font-roboto text-base overflow-hidden" dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />
            </div>
          </div>
        )}
        {!props.thumbnail && ( /* If thumbnail doesnt exist still create a post without image */
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <span className="text-base text-cyan-700 rounded-full">
                {formattedDate}
              </span>
              <span className="text-xxxs text-cyan-950 bg-cyan-400 p-1 rounded-full">
                {props.category} nextjs
              </span>
            </div>
            <div className="font-medium font-roboto text-base overflow-hidden" dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />
          </div>
        )}
      </Link>
    </article>
  );
}
