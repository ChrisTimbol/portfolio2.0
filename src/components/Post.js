import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FormatDate} from '@/components/FormatDate'

export default function Post({ date, excerpt, thumbnail, title, category, slug }) {
  const formattedDate = FormatDate(date);
  return (
    <article className="h-60 md:h-72  group cursor-pointer overflow-hidden  mt-4 p-4 bg-slate-800 rounded-lg shadow-sm transition duration-300 hover:shadow-2xl">
      
      <Link href={slug} className="">

        <h2 className="group-hover:text-cyan-400 text-2xl text-slate-50  font-bold font-robotoSerif ">
          {title || 'No Title'}
        </h2>

        {formattedDate && (
          <div className="flex space-x-2 my-1 sm:mb-4 lg:mb-6">
            <span className="text-sm text-slate-600 rounded-full">{formattedDate}</span>
            {category && (
              <span className="text-xs text-slate-50  my-1 bg-slate-600  rounded-full">{category} </span>
            )}
          </div>
        )}

        <div className="flex">
          {thumbnail && (
            <div className="w-1/2 h-32 mr-4 relative ">
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

          <div
            className={`font-roboto  w-full h-full text-slate-100  line-clamp-4  leading-7 prose  lg:line-clamp-8 overflow-hidden `}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>

      </Link>
    </article>
  );
}
