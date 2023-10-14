import {ProjectItem} from "./projectItem.jsx";
import {projects} from "../assets/projects.jsx";

/**
 * View Front End projects from router
 * @return {JSX.Element}
 * @constructor
 */
export function FrontProjects(){

    const projectsList = projects.filter(obj=> obj.parent === 'front-end-projects')
        .map((obj) => {
            return (
                <ProjectItem
                    key={obj.slug}
                    header={obj.name}
                    imageLink={obj.img}
                    imageAlt={obj.imgAlt}
                    description={obj.description}
                    projectLink={obj.link}
                />
            )
        })
    return(
        <section className="container-fluid projects">
            <header>
                <h1>Front-End Certification Projects</h1>
            </header>
            <div className="row">
                {projectsList}
            </div>
        </section>
    )
}