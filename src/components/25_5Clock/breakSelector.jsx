import {TimerSelector} from "./timerSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    selectTimerStatus,
    setBreakTime,
    setToBreakTime,
    selectBreakTime
} from "./features/clock25_5Slice.js";
import {ClockHelper} from "./assets/clockHelper.js";

export default function BreakSelector(){
    const dispatch = useDispatch()
    const timerStatus = useSelector(selectTimerStatus)
    const breakLength = useSelector(selectBreakTime)

    const handleBtChange = (e) => {
        if(ClockHelper.isNotStarted(timerStatus)){
            const target = e.target
            const action = target.getAttribute('data-action')
            dispatch(setToBreakTime(action))
        }

    }

    const handleRangeChange = (e) => {
        if(ClockHelper.isNotStarted(timerStatus)){
            const value = parseInt(e.target.value)
            dispatch(setBreakTime(value))
        }

    }

    return(
        <div className="break-selector">
            <TimerSelector
                label="Break Length"
                labelId="break-label"
                inputId="break-length"
                btnDownId="break-decrement"
                btnUpId="break-increment"
                defaultValue={5}
                inputValue={breakLength}
                minValue={0}
                maxValue={60}
                stepValue={1}
                handleBtChange={handleBtChange}
                handleRangeChange={handleRangeChange}
            />
        </div>
    )
}