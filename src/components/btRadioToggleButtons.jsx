import {useEffect} from "react";
import {ut} from "../utils/utils.js";
import PropTypes from "prop-types";

/**
 * BootStrap v5.3 radio toggle buttons component.
 * Require BootStrap v5.3 import css and js
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function BtRadioToggleButtons({disabled, selectedValue, options, radioName, radioId, title, handleChange}){

    useEffect(() => {
        //-> select bank
        if(ut.isStr(selectedValue)){
            const key = `${selectedValue}-${radioId}`
            document.getElementById(key).checked = true;
        }
    }, []);

    const soundBanks = options.map((obj, index) => {
        return (
            <div key={index} className="pe-2 btn-check-container">
                <input type="radio"
                       className="btn-check"
                       name={radioName}
                       id={`${obj.value}-${radioId}`}
                       key={index}
                       autoComplete="off"
                       data-bank={obj.value}
                       onChange={handleChange}
                       disabled={!disabled}/>
                <label className="btn btn-outline-light" htmlFor={`${obj.value}-${radioId}`}>{obj.label}</label>
            </div>
        )
    })
    return(
        <div className="btn-check-container">
            <div className="btn-check-header">{title}</div>
            <div className="d-flex flex-row btn-check-body">
                {soundBanks}
            </div>
        </div>
    )
}

BtRadioToggleButtons.propTypes = {
    disabled: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    radioName: PropTypes.string.isRequired,
    radioId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}