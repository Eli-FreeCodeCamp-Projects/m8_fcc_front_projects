import {ResizableContainer} from './resizableContainer.jsx'
import {InputEditor} from "./mdEditor.jsx";
import {HtmlPreview} from "./mdPreview.jsx";
import {defaultInput} from "./data/defaultInput.js";
import {Provider} from "react-redux";
import {Store} from "./store.js";
function MarkdownPreviewer() {
    const leftPane = <InputEditor/>
    const rightPane = <HtmlPreview defaultInput={defaultInput} />
    return (
        <Provider store={Store}>
            <ResizableContainer
                leftPane={leftPane}
                rightPane={rightPane} />
        </Provider>
    )
}

export default MarkdownPreviewer