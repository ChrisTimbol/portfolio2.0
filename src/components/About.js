import Image from 'next/image'

export default function About() {
    return (
        <>
        <Image src="/wave.svg" width={400} height={400} />

<div className="p-4 space-y-4 bg-gradient-to-b from-teal-400 via-teal-400 to-teal-300  rounded-lg shadow-lg">

  <h2 className="text-4xl font-robotoSerif mb-6 text-black underline decoration-teal-500 underline-offset-8">About Me</h2>


  <p className=" ">
    Hi, I'm <span className="">Chris Timbol</span>,
    a passionate web developer based in sunny San Diego,
    California.
  </p>
  <p>
    I find joy in front-end development-
    the artful blend of functional logic in code,
    bringing designs to life, and creating something
    unique in this world.
  </p>
  <p className=" ">
    I thrive on translating user ideas into seamless digital experiences.
  </p>
  <p>
    There's a profound sense of fulfillment in knowing that I can bring joy to someone through my creations, adding a touch of uniqueness to their digital experiences.
  </p>



  <p className="">
    I excel in <span className="font-medium">React</span> and <span className="text-sm">Tailwind</span>, ensuring fast and elegant web solutions. My expertise extends to creating custom WordPress themes and plugins, delivering pixel-perfect designs and intuitive interfaces.
  </p>


  <a href="/work" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105">
    Explore My Work
  </a>

</div>

<Image src="/bottomwave.svg" width={400} height={400} />
        </>
    )

}