import { useDispatch } from 'react-redux'
import {addKey, delKey} from './features/jsCalcSlice.js';
import {clearDisplay} from './features/jsCalcSlice.js';
import {basePads, keyPressPads} from "./data/basePads.js";
import {useEffect} from "react";
import {ut} from "../../utils/utils.js";
/**
 * DisplayBoxWithContext Component.
 * Used to display a message.
 * Use Redux store context.
 * @return {JSX.Element}
 * @constructor
 */
export function CalcPads(){
    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
        // returned function will be called on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, []);

    const jsCalcDispatcher = (calcFunc) => {
        switch(calcFunc){
            case "Ac":
                dispatch(clearDisplay())
                break
            case "Del":
                dispatch(delKey())
                break
            default:
                dispatch(addKey(calcFunc))
                break
        }
    }
    const handleKeyPress = (e) => {
        const key = (ut.isStr(e.key)) ?  e.key : null;
        console.log(`Key pressed ${key}`)
        const padPress = keyPressPads.filter((obj) => {
            if(obj.keyPress === key){
                return obj;
            }
        })

        if(padPress.length === 1){
            console.log(`Object filtered :`)
            console.log(padPress)
            jsCalcDispatcher(padPress[0].dataCalc)
        }
    }
    const handleClickCalc = (e) => {
        const calcFunc = e.target.getAttribute('data-func')
        jsCalcDispatcher(calcFunc)
    }
    const getPadsGroup = (pads) => {
        return pads.map((obj, i) => {
            const getBtContent = (obj) => {
                if(ut.isStr(obj.iconClass)){
                    return (<i className={obj.iconClass}></i>)
                }else{
                    return obj.text
                }
            }
            return (
                <button
                    id={obj.idPad}
                    key={i}
                    className={`btn ${obj.calcClass}`}
                    data-func={obj.dataCalc}
                    onClick={handleClickCalc}
                >{getBtContent(obj)}</button>
            )
        })
    }
    const calcPadsElements = basePads.map((obj, i) => {
        return (
            <div className={obj.containerClass} key={i}>{getPadsGroup(obj.pads)}</div>
        )
    })
    return (
        <div className="js-calc-pads">
            {calcPadsElements}
        </div>
    )
}