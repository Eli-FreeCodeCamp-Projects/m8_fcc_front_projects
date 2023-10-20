import {useSelector, useDispatch} from "react-redux";
import {
    CurrentTimerRun, setTimerValue, TimerStatus, startTimerId,
    selectTimerRun, selectTimerStatus,
    selectTimerValue, selectTimerMax, selectTimerId
} from "./features/clock25_5Slice.js";
import {useEffect} from "react";
import {ut} from "../../utils/utils.js";
import PropTypes from "prop-types";

export default function TimerDisplay({timerValueChange=null, timerLabelChange=null}){
    const dispatch = useDispatch()
    const timerRun = useSelector(selectTimerRun)
    const timerValue = useSelector(selectTimerValue)
    const timerMax = useSelector(selectTimerMax)
    const timerStatus = useSelector(selectTimerStatus)
    const timerId = useSelector(selectTimerId)

    useEffect(() => {
        runTimer()

        // returned function will be called on component unmount
        return () => {
            clearInterval(timerId);
        }
    }, [timerStatus]);

    const playSound = () => {
        const audio = document.getElementById(`beep`);
        if(ut.isElement(audio)){
            audio.play();
        }
    }

    const runTimer = () => {
        switch (timerStatus) {
            case TimerStatus.START.toString():
                const timerIdStart = setInterval(()=>{
                    dispatch(setTimerValue())

                }, 1000)
                dispatch(startTimerId(timerIdStart))
                break
            case TimerStatus.PAUSE.toString():
                clearInterval(timerId);
                break
            case TimerStatus.STOP.toString():
                clearInterval(timerId);
                break
        }

    }

    const formatNumberString = (val) => {
        if(val >= 0 && val < 10){
            return `0${val}`
        }
        return `${val}`
    }

    const handleTimerValueChange = (data) => {
        if(ut.isFunction(timerValueChange)){
            timerValueChange(data)
        }
    }

    const handleTimerLabelChange = (data) => {
        if(ut.isFunction(timerLabelChange)){
            timerLabelChange(data)
        }
    }

    const formatTimerValue = (val) => {
        if(val === 0){
            playSound()
        }
        handleTimerValueChange({timerValue: val})
        const min = formatNumberString(Math.floor(val / 60))
        const sec = formatNumberString(val - (min * 60))
        return `${min}:${sec}`
    }
    /**
     * Get the current timer css class.
     * @param {string} value 
     * @returns {string} return the current timer css class.
     */
    let getBgClass = (value) => {
        switch (value) {
            case CurrentTimerRun.SESSION.toString():
                return 'bg-session-clock'
            case CurrentTimerRun.BREAK.toString():
                return 'bg-break-clock'
        }
    }

    /**
     * Get the current timer label.
     * @param {string} value 
     * @returns {string} Return the current timer label
     */
    const getTimerLabel = (value) => {
        switch (value) {
            case CurrentTimerRun.SESSION.toString():
                return "Session"
            case CurrentTimerRun.BREAK.toString():
                return "Break"
        }
    }

    const getTimerValueToDeg = (value, max) => {
        const percentVal = Math.ceil( (value * 100) / max);
        const PercentDeg =  Math.ceil(360 - (percentVal * 360) / 100)
        return PercentDeg;
    }
    const clockStyle = {"--clock-current-deg": `${getTimerValueToDeg(timerValue, timerMax)}deg`}
    return(
        <div className={`timer-display ${getBgClass(timerRun)}`} style={clockStyle}>
            <div id="timer-label" className="timer-label">{getTimerLabel(timerRun)}</div>
            <div id="time-left" className="time-left">{formatTimerValue(timerValue)}</div>
        </div>
    )
}

TimerDisplay.propTypes = {
    timerValueChange: PropTypes.func, 
    timerLabelChange: PropTypes.func
}