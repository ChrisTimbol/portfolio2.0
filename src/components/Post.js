import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FormatDate } from '@/components/FormatDate';


const MAX_EXCERPT_WORDS = 30; // Maximum number of words for the excerpt

function truncateText(text, maxWords) {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
}


export default function Post({ date, excerpt, thumbnail, title, category, slug }) {
  const formattedDate = FormatDate(date);
  const truncatedExcerpt = truncateText(excerpt, MAX_EXCERPT_WORDS);

  return (
    <article className="sm:h-80  md:h-72 group cursor-pointer overflow-hidden mt-4 p-4 bg-slate-800 rounded-lg shadow-sm transition duration-300 hover:shadow-2xl">
      <Link href={`/blog/${slug}`}>

        <h2 className="group-hover:text-cyan-700 text-2xl text-slate-50 font-bold font-robotoSerif">
          {title || 'No Title'}
        </h2>

        {formattedDate && (
          <div className="flex space-x-2">
            <span className="text-sm text-slate-600 rounded-full">{formattedDate}</span>
            {category && (
              <span className="text-xs text-slate-50 bg-slate-600 rounded-full">{category}</span>
            )}
          </div>
        )}

        <div className="flex">
          {thumbnail && (
            <div className="w-1/2 h-32 mr-4 relative">
              <Image
                src={thumbnail}
                alt={title || 'Image of a post'}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="rounded-lg"
              />
            </div>
          )}

          <div className={`font-roboto w-full text-slate-100  leading-6  `} dangerouslySetInnerHTML={{ __html:  truncatedExcerpt }} />
        </div>

      </Link>
    </article>
  );
}
