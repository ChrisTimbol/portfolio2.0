import Image from 'next/image';

export default function Project({ title, description }) {
    return (
        <div className="ProjectContainer  ">
            <div className="h-60 w-full relative ">
                <Image
                    className="w-full  h-full "
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/example.png"
                    alt="Image for Post"
                    fill
                    priority
                />
            </div>
            <div className=" py-2">
                <h2 className="text-2xl font-semibold font-robotoSerif">
                    {title}
                </h2>
                <p className="text-base font-roboto">{description}</p>
            </div>
        </div>
    );
}
