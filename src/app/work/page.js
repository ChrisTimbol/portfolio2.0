import Sidebar from '@/components/Sidebar'
import Project from '@/components/Project'
export default async function Work() {
    return (
        <>
            <main className="px-1  min-h-screen flex flex-col items-center relative">               
            <section className="space-y-8 w-full"> 
                <h1 className="text-5xl flex justify-center">Projects</h1>
                <Project title="Project 1" description="Description 1" />
                <Project title="Project 2" description="Description 2" />
                <Project title="Project 3" description="Description 3" />
            </section>

                {/*              <Sidebar categories={categories} /> */}
            </main>

            <div className=""></div>
        </>
    )
}
