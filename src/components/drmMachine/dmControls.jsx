import PropTypes from "prop-types";
/**
 *
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function DrumControls({controls}){

    return(
        <div className="drum-box-control">
            {controls}
        </div>
    )
}

DrumControls.propTypes = {
    controls: PropTypes.element.isRequired
}