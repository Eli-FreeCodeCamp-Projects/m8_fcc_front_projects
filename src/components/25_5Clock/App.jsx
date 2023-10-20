
import '../../css/25_5Clock.css'
import TimerDisplay from "./timerDisplay.jsx";
import {Provider} from "react-redux";
import {Store} from "./store.js";
import BreakSelector from "./breakSelector.jsx";
import SessionSelector from "./sessionSelector.jsx";
import TimerControls from "./timerControls.jsx";
import Beep from './assets/sounds/BeepSound.wav'
/**
 * 25 + 5 Clock Component
 * @return {JSX.Element}
 * @constructor
 */
export default function App(){
    const handleTimerValueChange = (action, value) => {
        console.log(`display has changed: -- action : ${action} -- value : ${value}`)
    };

    const handleTimerLabelChange = (action, value) => {
        console.log(`display has changed: -- action : ${action} -- value : ${value}`)
    };
    return(
        <Provider store={Store}>
            <section id="clock-container" className="container-fluid">
                <div className="clock-selector">
                    <BreakSelector />
                    <SessionSelector />
                </div>
                <div className="clock-body">
                    <TimerDisplay  timerValueChange={handleTimerValueChange} />
                    <TimerControls />
                </div>
                <div className="clock-footer">

                </div>
                <audio id="beep" preload="auto" src={Beep}></audio>
            </section>
        </Provider>

    )
}