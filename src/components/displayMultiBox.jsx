import PropTypes, {string} from "prop-types";
/**
 * DisplayBox Component.
 * Used to display a message.
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DisplayMultiBox({InputsMsg, OutputMsg, itemId, itemClass}){
    const inputItems = InputsMsg.map((value, key) => {
        return <div className="dmb-input-item" key={key}>{value}</div>
    })
    return(
        <div id={itemId} className={itemClass}>
            <div className="dmb-input">
                {inputItems}
            </div>
            <div className="dmb-output">{OutputMsg}</div>
        </div>
    )
}

DisplayMultiBox.propTypes = {
    InputsMsg: PropTypes.arrayOf(string).isRequired,
    OutputMsg: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    itemClass: PropTypes.string.isRequired
}