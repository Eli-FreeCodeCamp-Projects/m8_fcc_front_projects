import {useSelector, useDispatch} from 'react-redux'
import {selectPower, selectBank, selectAvailableBanks, setSoundBank} from './features/drmMachineSlice.js';
import {BtRadioToggleButtons} from "../btRadioToggleButtons.jsx";

export function SoundBankSelector(){
    const dispatch = useDispatch()
    const power = useSelector(selectPower)
    const bank = useSelector(selectBank)
    const availableBanks = useSelector(selectAvailableBanks)

    const handleChange = (e)=>{
        const target = e.target;
        const bank = target.getAttribute('data-bank')
        dispatch(setSoundBank(bank))
    }

    return <BtRadioToggleButtons
        disabled={power}
        selectedValue={bank}
        options={availableBanks}
        radioName="m8-snd-bank-selector"
        radioId="m8-snd-bank"
        title="Select a Sound Bank"
        handleChange={handleChange} />
}
