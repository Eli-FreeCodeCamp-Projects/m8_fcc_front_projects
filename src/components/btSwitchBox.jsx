import {useEffect} from "react";
import {ut} from "../utils/utils.js";
import PropTypes, {string} from "prop-types";

/**
 * BootStrap v5.3 switch checkbox component.
 * Require BootStrap v5.3 import css and js
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function BtSwitchBox({itemId, containerClasses, label, value, setValue}){
    useEffect(() => {
        if(value === true){
            document.getElementById(itemId).checked = true;
        }
    }, []);
    const contClasses = containerClasses.reduce((res, value) => {
        if(ut.isAttrKey(value)){
            res += `${value} `
        }
        return res;
    }, '')
    return(
        <div className={`form-check form-switch ${contClasses}`}>
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={itemId}
                onChange={setValue}
            />
            <label className="form-check-label" htmlFor={itemId}>{label}</label>
        </div>
    )
}

BtSwitchBox.propTypes = {
    itemId: PropTypes.string.isRequired,
    containerClasses: PropTypes.arrayOf(string).isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    setValue: PropTypes.func.isRequired,
}