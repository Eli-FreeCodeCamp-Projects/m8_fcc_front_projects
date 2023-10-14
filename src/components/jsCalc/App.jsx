import {CalcContainer} from "./CalcContainer.jsx";
import {Store} from "./store.js";
import {Provider} from "react-redux";
import '../../css/jsCalc.css'

/**
 * Javascript calculator Component
 * @return {JSX.Element}
 * @constructor
 */
function App(){

    return(
        <Provider store={Store}>
            <section id="js-calc" className="container-fluid">
                <CalcContainer />
            </section>
        </Provider>
    )
}

export default App