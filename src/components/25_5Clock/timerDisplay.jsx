import {useSelector, useDispatch} from "react-redux";
import {
    CurrentTimerRun,
    selectTimerRun, selectTimerStatus,
    selectTimerValue, setTimerValue,
    TimerStatus, startTimerId, selectTimerId
} from "./features/clock25_5Slice.js";
import {useEffect} from "react";
import {ut} from "../../utils/utils.js";

export default function TimerDisplay(){
    const dispatch = useDispatch()
    const timerRun = useSelector(selectTimerRun)
    const timerValue = useSelector(selectTimerValue)
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

    const formatTimerValue = (val) => {
        if(val > 60*60){
            val = 60*60
        }else if(val < 0){
            val = 0
        }
        if(timerValue === 0){
            playSound()
        }
        const min = formatNumberString(Math.floor(val / 60))
        const sec = formatNumberString(val - (min * 60))
        return `${min}:${sec}`
    }
    let bgClass = 'bg-session-body'
    const getTimerLabel = (value) => {
        switch (value) {
            case CurrentTimerRun.SESSION.toString():
                bgClass = 'bg-session'
                return "Session"
            case CurrentTimerRun.BREAK.toString():
                bgClass = 'bg-break'
                return "Break"
        }
    }
    return(
        <div className={`timer-display ${bgClass}`}>
            <div id="timer-label" className="timer-label">{getTimerLabel(timerRun)}</div>
            <div id="time-left" className="time-left">{formatTimerValue(timerValue)}</div>
        </div>
    )
}