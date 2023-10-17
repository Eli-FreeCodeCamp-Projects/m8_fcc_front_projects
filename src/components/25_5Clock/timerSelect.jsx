import {BtRange} from "../btRange.jsx";
import {ut} from "../../utils/utils.js";
import PropTypes from "prop-types";

export function TimerSelector({
                                  label,
                                  inputId,
                                  labelId,
                                  btnUpId,
                                  btnDownId,
                                  inputValue,
                                  handleRangeChange,
                                  handleBtChange,
                                  defaultValue = 50,
                                  minValue = 0,
                                  maxValue = 100,
                                  stepValue= 1,


}){
    const getTimerValue = (inputVal, defaultVal) => {
        let res = (ut.isNumber(inputVal))? parseInt(inputVal) : parseInt(defaultVal);
        if(res > maxValue){
            res = maxValue
        }else if(res < minValue){
            res = minValue
        }
        return res
    }
    const timerValue = getTimerValue(inputValue, defaultValue)
    const btnUpDisabled = (timerValue >= maxValue);
    const btnDownDisabled = (timerValue <= minValue);
    return(
        <div className="timer-selector">
            <BtRange
                onlyInput={true}
                disabled={false}
                inputId={`${inputId}-range`}
                inputValue={timerValue}
                minValue={minValue}
                maxValue={maxValue}
                stepValue={stepValue}
                handleChange={handleRangeChange}
            />
            <div className="tSel-label"><label id={labelId} htmlFor={inputId}>{label}</label></div>
            <div className="input-group">
                <button
                    id={btnUpId}
                    className="btn btn-outline-secondary"
                    type="button"
                    data-action="up"
                    onClick={handleBtChange}
                    disabled={btnUpDisabled}>
                    <i className="fas fa-arrow-up"></i>
                </button>
                <div id={inputId} className="tSel-value" data-value={''+timerValue}>{''+timerValue}</div>
                <button
                    id={btnDownId}
                    className="btn btn-outline-secondary"
                    type="button"
                    data-action="down"
                    onClick={handleBtChange}
                    disabled={btnDownDisabled}>
                    <i className="fas fa-arrow-down"></i>
                </button>
            </div>
        </div>
    )
}

TimerSelector.propTypes = {
    label: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    labelId: PropTypes.string.isRequired,
    btnUpId: PropTypes.string.isRequired,
    btnDownId: PropTypes.string.isRequired,
    inputValue: PropTypes.number.isRequired,
    defaultValue: PropTypes.number.isRequired,
    handleRangeChange: PropTypes.func.isRequired,
    handleBtChange: PropTypes.func.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    stepValue: PropTypes.number,
}