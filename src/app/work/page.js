/* A page for a list of projects I have worked on */
import Project from '@/components/Project'

export default function Work() {
    return (
        <>
        
            <div className="w-full h-full"> {/* Page Content */}

                <ul className=""> {/* List of projects */}
                    <li><Project /></li>
                    <li><Project /></li>
                    <li><Project /></li>
                    <li><Project /></li>
                    <li><Project /></li>
                </ul>

            </div>
        </>
    )
}