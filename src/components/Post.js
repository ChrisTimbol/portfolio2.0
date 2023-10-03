import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const truncateExcerpt = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ');
  } else {
    return text;
  }
};

export default function Post({ date, excerpt, thumbnail, title, category, slug }) {
  const formattedDate = formatDate(date);
  const truncatedExcerpt = truncateExcerpt(excerpt, 20);

  return (
    <article className="cursor-pointer overflow-hidden h-full  p-4 bg-cyan-950 rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-900 shadow-cyan-950 transition duration-300 hover:shadow-xl">
      <Link href={slug} className="hover:text-cyan-400">
        <h2 className="text-2xl text-cyan-50 font-bold font-robotoSerif mb-2 leading-relaxed">
          {title}
        </h2>
        <div className="flex space-x-2 mb-2 sm:mb-4 lg:mb-6">
          <span className="text-sm text-cyan-600 rounded-full">{formattedDate}</span>
          <span className="text-xs text-cyan-50 bg-cyan-600 px-2 rounded-full">{category} nextjs</span>
        </div>

        <div className="flex  ">
          {thumbnail && (
            <div className="w-1/3 h-32  mr-2  relative">
              <Image
                src={thumbnail}
                title={title}
                alt="Image for Post"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="rounded-lg"
              />
            </div>
          )}
          <div className={`font-roboto leading-relaxed text-med max-w-screen-md mx-auto ${thumbnail ? 'w-2/3' : 'w-full'} text-white text-medium`} dangerouslySetInnerHTML={{ __html: truncatedExcerpt }} />

        </div> {/* End of flex container for image-text */}

      </Link>
    </article>
  );
}
