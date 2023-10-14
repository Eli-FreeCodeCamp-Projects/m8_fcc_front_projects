import { useSelector } from 'react-redux'
import {selectDisplay} from './features/drmMachineSlice.js';
import {DisplayBox} from "../displayBox.jsx";

/**
 * DisplayBoxWithContext Component.
 * Used to display a message.
 * Use Redux store context.
 * @return {JSX.Element}
 * @constructor
 */
export function DisplayBoxWithContext(){
    const displayMsg = useSelector(selectDisplay)
    return<DisplayBox displayMsg={displayMsg} itemId="display" itemClass="display-box"/>
}
