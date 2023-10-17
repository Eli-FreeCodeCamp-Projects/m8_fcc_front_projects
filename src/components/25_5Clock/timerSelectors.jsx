import BreakSelector from "./breakSelector.jsx";
import SessionSelector from "./sessionSelector.jsx";

export default function TimerSelectors(){

    return(
        <div className="timer-selectors">
            <BreakSelector />
            <SessionSelector />
        </div>
    )
}