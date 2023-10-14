import PropTypes from "prop-types";
/**
 * DisplayBox Component.
 * Used to display a message.
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DisplayBox({displayMsg, itemId, itemClass}){
    return(
        <div id={itemId} className={itemClass}>
            {displayMsg}
        </div>
    )
}

DisplayBox.propTypes = {
    displayMsg: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
    itemClass: PropTypes.string.isRequired
}