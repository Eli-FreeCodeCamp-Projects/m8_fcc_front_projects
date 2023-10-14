import {Provider} from 'react-redux'
import {Store} from "./store.js";
import DrumMachine from "./drumMachine.jsx";
import '../../css/drumMachine.css';

/**
 * Random Quote Machine App Component
 * @return {JSX.Element}
 * @constructor
 */
export default function App(){

    return(
        <Provider store={Store}>
            <DrumMachine />
        </Provider>

    )
}