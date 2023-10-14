import {useEffect} from "react";
import {ut} from "../utils/utils.js";
import PropTypes from "prop-types";


/**
 * BootStrap v5.3 range component.
 * Require BootStrap v5.3 import css and js
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function BtRange({disabled, inputValue, stepValue, minValue, maxValue, inputId, inputName, label, handleChange}){

    useEffect(() => {
        const element = document.getElementById(inputId)
        //-> select bank
        if(!disabled && ut.isNumber(inputValue)){
            element.value = inputValue
        }
    }, []);

    return(
        <div className="vol-box">
            <label htmlFor={inputId} className="form-label">{label}</label>
            <input
                type="range"
                className="form-range"
                min={ut.isNumber(minValue) ? minValue: 0}
                max={ut.isNumber(maxValue) ? maxValue: 100}
                step={ut.isNumber(stepValue) ? stepValue: 1}
                id={inputId}
                name={(ut.isAttrKey(inputName)) ? inputName : inputId}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    )
}

BtRange.propTypes = {
    disabled: PropTypes.bool.isRequired,
    inputValue: PropTypes.number.isRequired,
    stepValue: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    inputId: PropTypes.string.isRequired,
    inputName: PropTypes.string,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}