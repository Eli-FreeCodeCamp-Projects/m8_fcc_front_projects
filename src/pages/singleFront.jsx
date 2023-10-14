import {useParams} from "react-router-dom";
import {projects} from "../assets/projects.jsx";
import {lazy, Suspense} from "react";
/**
 * View single from router
 * @return {JSX.Element}
 * @constructor
 */
export function SingleFront(){
    const {name} = useParams()

    const getProject = (name) => {
        const project = projects.filter(obj => obj.slug === name)
        return (project.length === 1 ) ? project[0] : null
    }

    const loadComponent = (name) => {
        switch (name){
            case 'random-quote-machine':
                const QuoteMachineLazy = lazy(() => import("../components/randQuotes/App.jsx"))
                return <Suspense><QuoteMachineLazy /></Suspense>
            case 'markdown-previewer':
                const MarkdownPreviewerLazy = lazy(() => import("../components/mdPreviewer/App.jsx"))
                return <Suspense><MarkdownPreviewerLazy /></Suspense>
            case 'drum-machine':
                const DrumMachineLazy = lazy(() => import("../components/drmMachine/App.jsx"))
                return <Suspense><DrumMachineLazy /></Suspense>
            case 'js-calculator':
                const JsCalcLazy = lazy(() => import("../components/jsCalc/App.jsx"))
                return <Suspense><JsCalcLazy /></Suspense>
        }
    }

    const project = getProject(name)
    return(
        <div className="project-view">

            {project?.showTitle && <h1>{project?.name}</h1>}

            <div className="container-fluid project-view-app">
                {loadComponent(project?.slug)}
            </div>
            <div className="container-fluid project-view-desc">

            </div>
        </div>
    )
}