import {TimerSelector} from "./timerSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    setSessionTime,
    setToSessionTime,
    selectTimerStatus,
    selectSessionTime
} from "./features/clock25_5Slice.js";
import {ClockHelper} from "./assets/clockHelper.js";
export default function SessionSelector(){
    const dispatch = useDispatch()
    const timerStatus = useSelector(selectTimerStatus)
    const sessionLength = useSelector(selectSessionTime)
    const handleBtChange = (e) => {
        if(ClockHelper.isNotStarted(timerStatus)){
            const target = e.target
            const action = target.getAttribute('data-action')
            dispatch(setToSessionTime(action))
        }

    }

    const handleRangeChange = (e) => {
        if(ClockHelper.isNotStarted(timerStatus)){
            const value = parseInt(e.target.value)
            dispatch(setSessionTime(value))
        }
    }

    return(
        <div className="session-selector">
            <TimerSelector
                label="Session Length"
                labelId="session-label"
                inputId="session-length"
                btnDownId="session-decrement"
                btnUpId="session-increment"
                defaultValue={25}
                inputValue={parseInt(sessionLength)}
                minValue={0}
                maxValue={60}
                stepValue={1}
                handleBtChange={handleBtChange}
                handleRangeChange={handleRangeChange}
            />
        </div>
    )
}