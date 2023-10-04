import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateString) => {
  if (dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  return '';
};

const truncateExcerpt = (text, wordLimit) => {
  if (text) {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ');
    } else {
      return text;
    }
  }
  return '';
};

export default function Post({ date, excerpt, thumbnail, title, category, slug }) {
  const formattedDate = formatDate(date);
  const truncatedExcerpt = truncateExcerpt(excerpt, 20);

  return (
    <article className="cursor-pointer overflow-hidden h-full  p-4 bg-cyan-950   hover:bg-cyan-500 rounded-lg shadow-lg  hover:shadow-cyan-900 shadow-cyan-800 transition duration-300 hover:shadow-xl">
      <Link href={slug} className="">
        <h2 className="text-2xl text-cyan-50 font-bold font-robotoSerif ">
          {title || 'No Title'}
        </h2>
        {formattedDate && (
          <div className="flex space-x-2 mb-2 sm:mb-4 lg:mb-6">
            <span className="text-sm text-cyan-600 rounded-full">{formattedDate}</span>
          {/*   {category && ( */}
              <span className="text-xs text-cyan-50 bg-cyan-600 px-2 rounded-full">{category} nextjs</span>
         {/*    )} */}
          </div>
        )}

        <div className="flex">
          {thumbnail && (
            <div className="w-1/3 h-32 mr-2 relative">
              <Image
                src={thumbnail}
                title={title || 'Image'}
                alt={title || 'Image'}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="rounded-lg"
              />
            </div>
          )}
          <div
            className={`font-roboto leading-relaxed text-med max-w-screen-md mx-auto ${
              thumbnail ? 'w-2/3' : 'w-full'
            } text-white text-medium`}
            dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}
          />
        </div>
      </Link>
    </article>
  );
}
