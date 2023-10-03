import Project from '@/components/Project'
import Sidebar from '@/components/Sidebar'
import Carousel from '@/components/Carousel';
import Image from 'next/image';

const projects = [
    { title: 'Project 1', description: 'Description 1Description 1Description 1Description 1Description 1Description 1Description 1' },
    { title: 'Project 2', description: 'Description 2Description 1Description 1Description 1Description 1' },
    { title: 'Project 3', description: 'Description Description 1Description 1Description 1Description 13' }
];

export default function Work() {
    return (
        <>
            <main className="px-2 py-12  w-full bg-gray-950 text-cyan-100 leading-loose">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} description={project.description} />
                ))}
            </main>
        </>
    );
}