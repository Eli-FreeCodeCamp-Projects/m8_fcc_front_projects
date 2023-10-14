import {useSelector, useDispatch} from 'react-redux'
import {selectPower, selectVolume, setVolume} from './features/drmMachineSlice.js';
import {BtRange} from '../btRange.jsx'

/**
 * Volume Selector.
 * Used to control Drum Machine Volume.
 * @return {JSX.Element}
 * @constructor
 */
export function VolumeSelector(){

    const dispatch = useDispatch()
    const power = useSelector(selectPower)
    const volume = useSelector(selectVolume)

    const handleVolumeChange = (e) =>{
        const target = e.target;
        dispatch(setVolume(target.value))
    }

    return <BtRange
        disabled={!power}
        inputValue={volume}
        inputId="drum-box-vol"
        label={`Volume ${volume} %`}
        handleChange={handleVolumeChange}
    />
}