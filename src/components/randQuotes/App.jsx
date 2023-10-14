import {Provider} from 'react-redux'
import {Store} from "./store.js";
import QuoteMachine from "./quoteMachine.jsx";
import '../../css/quote_machine.css';
/**
 * Random Quote Machine App Component
 * @return {JSX.Element}
 * @constructor
 */
export default function AppQuoteMachine(){

    return(
        <Provider store={Store}>
            <QuoteMachine />
        </Provider>

    )
}