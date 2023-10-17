import {TimerStatus} from "../features/clock25_5Slice.js";
import {ut} from "../../../utils/utils.js";

export class ClockHelper{
    static isNotStarted(timerStatus){
        return timerStatus !== TimerStatus.START.toString()
    }

    static setDisplay(elementId, value){
        const element = document.getElementById(elementId)
        if(ut.isElement(element)){
            element.innerText = value
        }
    }

    static setToDisplay(elementId, action){
        const element = document.getElementById(elementId)
        if(ut.isElement(element)){
            const value = parseInt(element.innerText);
            if(value >= 0){
                switch (action.payload) {
                    case 'up':
                        element.innerText = '' + (value + 1)
                        break
                    case 'down':
                        element.innerText = '' + (value - 1)
                        break

                }
            }

        }
    }
}