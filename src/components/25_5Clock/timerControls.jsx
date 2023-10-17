import {useDispatch, useSelector} from "react-redux";
import {
    pauseTimer,
    startTimer, clearTimer, selectIsStarted
} from "./features/clock25_5Slice.js";
import {ut} from "../../utils/utils.js";

export default function TimerControls(){
    const dispatch = useDispatch()
    const isStarted = useSelector(selectIsStarted)
    const resetActiveButton = () =>{
        const lastActive = document.querySelector('.timer-control button.active')
        if(ut.isElement(lastActive)){
            lastActive.classList.remove('active')
        }

    }

    const handleStartStop = (e)=>{
        const target = e.target
        if(isStarted === true){
            dispatch(pauseTimer())
            target.classList.remove('active')
        }else{
            dispatch(startTimer())
            target.classList.add('active')
        }

    }

    const stopSound = () => {
        const audio = document.getElementById(`beep`);
        if(ut.isElement(audio)){
            audio.pause();
            audio.currentTime = 0;
        }
    }

    const handleRefresh = ()=>{
        resetActiveButton()
        stopSound()
        dispatch(clearTimer())
    }

    return(
        <div className="timer-control">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button id="start_stop" type="button" className="btn btn-default" onClick={handleStartStop}>
                    {(isStarted === true) ? (<i className="fas fa-pause"></i>) : (<i className="fas fa-play"></i>)}
                </button>
                <button id="reset" type="button" className="btn btn-default" onClick={handleRefresh}>
                    <i className="fas fa-sync"></i>
                </button>
            </div>
        </div>
    )
}