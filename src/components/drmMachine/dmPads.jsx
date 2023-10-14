import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {selectBankPads, selectPower, selectVolume, setDisplay} from './features/drmMachineSlice.js';
import {ut} from "../../utils/utils.js";

/**
 * Drum pads Component
 * @return {JSX.Element}
 * @constructor
 */
export function DrumPads(){
    const dispatch = useDispatch()
    const power = useSelector(selectPower)
    const volume = useSelector(selectVolume)
    const bankPads = useSelector(selectBankPads)

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        // returned function will be called on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, []);

    const playPad = (shortcut) => {
        const audio = document.getElementById(`${shortcut}`);
        if(ut.isElement(audio)){
            dispatch(setDisplay(audio.parentElement.getAttribute('data-display')))
            audio.volume = ut.toFixedFloat(volume / 100, 2);
            audio.play();
        }
    }

    const handleClick = (e) => {
        const target = e.target;
        const shortcut = target.getAttribute('data-shortcut')
        playPad(shortcut);
    }

    const handleKeyPress = (e) => {

        const key = (ut.isStr(e.key)) ?  e.key.toUpperCase() : null;
        const pad = bankPads.filter((obj) => {
            if(obj.shortcut === key){
                return obj;
            }
        });
        if(pad.length === 1){
            playPad(key);
        }
    }
    const disabledClass = (!power) ? 'disabled' : '';

    const drumPadsElements = bankPads.map((obj, index) => {
        return (
            <div key={index} className="col-4 pad-container">
                <div
                    id={obj.id}
                    className={`d-flex flex-column justify-content-center drum-pad ${disabledClass}`}
                    key={index}
                    data-shortcut={obj.shortcut}
                    data-display={obj.display}
                    onClick={(power) ? handleClick : null}>
                    <audio
                        id={obj.shortcut}
                        className="clip"
                        src={(power) ? obj.sound : '#'}></audio>
                    {obj.shortcut}
                </div>
            </div>
        )
    })
    return(
        <div className="container-fluid">
            <div className="row">
                {drumPadsElements}
            </div>
        </div>
    )
}
