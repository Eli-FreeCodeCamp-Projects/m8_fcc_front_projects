import {CalcDisplay} from "./display.jsx";
import {CalcPads} from "./calcPads.jsx";


/**
 * DisplayBoxWithContext Component.
 * Used to display a message.
 * Use Redux store context.
 * @return {JSX.Element}
 * @constructor
 */
export function CalcContainer(){

    return(
        <div className="js-calc-main">
            <div className="js-calc-head">
                M8 Calculator
            </div>
            <CalcDisplay />
            <CalcPads />

        </div>
    )
}