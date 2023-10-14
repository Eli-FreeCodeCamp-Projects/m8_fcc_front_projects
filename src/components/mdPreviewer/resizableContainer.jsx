import {ResizableWindows} from "./resizableWindows.jsx";

export function ResizableContainer({leftPane, rightPane}){

    return(
        <section className="container-fluid min-vh-100">
            <header><h1>Markdown Previewer</h1></header>
            <ResizableWindows
                leftPane={leftPane}
                rightPane={rightPane}
            />
        </section>
    )
}