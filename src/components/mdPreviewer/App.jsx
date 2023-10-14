import {Provider} from 'react-redux'
import {Store} from "./store.js";
import MarkdownPreviewer from "./mdPreviewer.jsx";
import '../../css/mdPreviewer.css';
/**
 * Random Quote Machine App Component
 * @return {JSX.Element}
 * @constructor
 */
export default function App(){

    return(
        <Provider store={Store}>
            <MarkdownPreviewer />
        </Provider>

    )
}