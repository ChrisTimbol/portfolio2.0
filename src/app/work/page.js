import Sidebar from '@/components/Sidebar'
import Project from '@/components/Project'
export default async function Work() {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center relative"> {/* Use grid */}
                <section className="Just-a-spacer-section pt-32"></section>
                <section className="space-y-8 w-full"> {/* MainContentBlogSection */}
                    <h1 className="text-5xl">Projects</h1>
                    <ul className="space-y-12">
                        <li>
                            <Project />
                        </li>
                    </ul>

                </section>

   {/*              <Sidebar categories={categories} /> */}
            </main>

            <div className=""></div>
        </>
    )
}
