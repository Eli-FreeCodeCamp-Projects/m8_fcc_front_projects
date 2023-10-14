import { useSelector } from 'react-redux'
import {selectOutput} from './features/jsCalcSlice.js';
import {DisplayBox} from "../displayBox.jsx";

/**
 * DisplayBoxWithContext Component.
 * Used to display a message.
 * Use Redux store context.
 * @return {JSX.Element}
 * @constructor
 */
export function CalcDisplay(){
    const outputMsg = useSelector(selectOutput)

    return (
        <div className="calc-display">
            <DisplayBox displayMsg={outputMsg} itemId="display" itemClass="display-box"/>
        </div>)
}