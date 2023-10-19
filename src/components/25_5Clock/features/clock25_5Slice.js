import {createSlice} from '@reduxjs/toolkit'
import {ut} from "../../../utils/utils.js";

export const CurrentTimerRun = Object.freeze({
    SESSION:   Symbol("session"),
    BREAK:  Symbol("break")
});

export const TimerStatus = Object.freeze({
    START:   Symbol("start"),
    STOP:  Symbol("stop"),
    PAUSE:  Symbol("pause")
});

const setTimerLength = (value) => {
    if(ut.isNumber(value) && (value > 0 && value <= 60)){
        return value
    }else if(value > 60){
        return 60
    }else{
        return 1
    }
}
const updateTimerValue = (state, currentRun) => {
    if(currentRun.toString() === state.timerRun.toString()){
        switch (currentRun) {
            case CurrentTimerRun.SESSION:
                state.timerValue = state.sessionTime * 60
                break
            case CurrentTimerRun.BREAK:
                state.timerValue = state.breakTime * 60
                break
        }
        state.timerMax = state.timerValue
    }
}

const updateTimerRun = (state) => {
    switch (state.timerRun){
        case CurrentTimerRun.SESSION.toString():
            state.timerRun = CurrentTimerRun.BREAK.toString()
            state.timerValue = state.breakTime * 60
            break;
        case CurrentTimerRun.BREAK.toString():
            state.timerRun = CurrentTimerRun.SESSION.toString()
            state.timerValue = state.sessionTime * 60
            break;
        default:
            state.timerRun = CurrentTimerRun.SESSION.toString()
            state.timerValue = state.sessionTime * 60
            break;
    }
    state.timerMax = state.timerValue
}

const defaultState = {
    breakTime: 5,
    sessionTime: 25,
    timerRun: CurrentTimerRun.SESSION.toString(),
    timerValue: 25*60,
    timerMax: 25*60,
    timerStatus: TimerStatus.STOP.toString(),
    isStarted: false,
    timerId: null
}

const clock25_5Slice = createSlice({
    name: 'clock25_5',
    initialState: defaultState,
    reducers: {
        clearTimer(state){
            state.breakTime = defaultState.breakTime;
            state.sessionTime = defaultState.sessionTime;
            state.timerRun = defaultState.timerRun;
            state.timerValue = defaultState.timerValue;
            state.timerMax = defaultState.timerMax;
            state.timerStatus = defaultState.timerStatus;
            state.isStarted = defaultState.isStarted;
        },
        setBreakTime(state, action){
            state.breakTime = setTimerLength(action.payload)
            updateTimerValue(state, CurrentTimerRun.BREAK)
        },
        setToBreakTime(state, action){
            const value = parseInt(state.breakTime)
            switch (action.payload) {
                case 'up':
                    state.breakTime = setTimerLength(value + 1)
                    break
                case 'down':
                    state.breakTime = setTimerLength(value - 1)
                    break

            }
            updateTimerValue(state, CurrentTimerRun.BREAK)
        },
        setSessionTime(state, action){
            state.sessionTime = setTimerLength(action.payload)
            updateTimerValue(state, CurrentTimerRun.SESSION)
        },
        setToSessionTime(state, action){
            const value = parseInt(state.sessionTime)
            switch (action.payload) {
                case 'up':
                    state.sessionTime = setTimerLength(value + 1)
                    break
                case 'down':
                    state.sessionTime = setTimerLength(value - 1)
                    break

            }
            updateTimerValue(state, CurrentTimerRun.SESSION)
        },
        setTimerValue(state){
            const value = parseInt(state.timerValue)
            if(value > 0){
                state.timerValue = state.timerValue - 1
            }else{
                //state.timerStatus = TimerStatus.ENDED.toString();
                updateTimerRun(state)
            }

        },
        startTimerId(state, action){
            state.timerId = action.payload;
        },
        startTimer(state){
            state.timerStatus = TimerStatus.START.toString();
            state.isStarted = true
        },
        pauseTimer(state){
            state.timerStatus = TimerStatus.PAUSE.toString();
            state.isStarted = false
        },
        setTimerRun(state){
            updateTimerRun(state)
        }
    }
})

export const {
    clearTimer,
    setBreakTime,
    setToBreakTime,
    setSessionTime,
    setToSessionTime,
    setTimerValue,
    startTimer,
    pauseTimer,
    startTimerId,
    setTimerRun
} = clock25_5Slice.actions
export const selectBreakTime = state => state.clock25_5.breakTime
export const selectSessionTime = state => state.clock25_5.sessionTime
export const selectTimerRun = state => state.clock25_5.timerRun
export const selectTimerValue = state => state.clock25_5.timerValue
export const selectTimerMax = state => state.clock25_5.timerMax
export const selectTimerStatus = state => state.clock25_5.timerStatus
export const selectIsStarted = state => state.clock25_5.isStarted
export const selectTimerId = state => state.clock25_5.timerId
export default clock25_5Slice.reducer