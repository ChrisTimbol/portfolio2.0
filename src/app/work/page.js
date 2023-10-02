
import Sidebar from '@/components/Sidebar'
import Project from '@/components/Project'
import Carousel from '@/components/Carousel';

const projects = [
    { title: 'Project 1', description: 'Description 1' },
    { title: 'Project 2', description: 'Description 2' },
    { title: 'Project 3', description: 'Description 3' }
  ];

export default function Work() {
    return (
        <>{/* zoom out then zoom in  */}
            <main className="overflow-hidden relative ">
            <Carousel projects={projects} />
            </main>


        </>
    )
}
