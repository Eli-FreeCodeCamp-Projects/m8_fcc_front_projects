import {useSelector, useDispatch} from 'react-redux'
import {selectPower, setPower} from './features/drmMachineSlice.js';
import {BtSwitchBox} from '../btSwitchBox.jsx'

/**
 * Power Selector.
 * Used to control Drum Machine Power.
 * @return {JSX.Element}
 * @constructor
 */
export function PowerSelector(){

    const dispatch = useDispatch()
    const power = useSelector(selectPower)

    const handlePowerChange = (e) =>{
        const target = e.target;
        dispatch(setPower(target.checked))
    }

    return <BtSwitchBox
        itemId="dm-power-switch"
        value={power}
        containerClasses={['power-box']}
        label="Power"
        setValue={handlePowerChange}
    />
}