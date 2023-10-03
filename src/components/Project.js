import Image from 'next/image';

export default function Project({ title, description, github, thumbnail, dateCreated, category }) {
    return (
        <div className="cursor-pointer overflow-hidden h-[50vh]  p-4 bg-cyan-950 rounded-lg shadow-lg hover:scale-105 hover:shadow-cyan-900 shadow-cyan-950 transition duration-300 hover:shadow-xl">
            <div className="h-2/3 w-full relative ">
                <Image
                    className="w-full  h-full rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={thumbnail}
                    alt="Image for Post"
                    fill
                    priority
                />
            </div>
            <div className="h-1/3 items-center flex  flex-col py-2">
                <h2 className="text-2xl text-cyan-50 font-bold font-robotoSerif mb-2 leading-relaxed">
                    {title}
                </h2>

                {/*                 
                    <div className="flex   sm:mb-4 lg:mb-6">
                    <span className="text-sm text-cyan-600 rounded-full">{dateCreated}</span> 
                  <span className="text-xs text-cyan-50 bg-cyan-600 px-2 rounded-full">{category} </span> 
                </div> 
                */}
                <p className="font-roboto    text-medium">{description}</p>
            </div>
        </div>
    );
}
