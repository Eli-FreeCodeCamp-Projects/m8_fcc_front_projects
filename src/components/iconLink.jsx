import PropTypes from "prop-types";
/**
 * IconLink Component
 * @return {JSX.Element}
 * @constructor
 */
export function IconLink({linkClass, linkId, link, linkRel, linkTarget, iconClass}){
    return(
        <a href={link} rel={linkRel ?? ''} id={linkId ?? ''} target={linkTarget ?? ''} className={linkClass ?? ''}>
            <i className={iconClass}></i>
        </a>
    )
}

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    linkClass: PropTypes.string,
    linkId: PropTypes.string,
    linkTarget: PropTypes.oneOf(['_blank', '_self', '_parent', '_top', 'framename']),
    linkRel: PropTypes.string,
    iconClass: PropTypes.string.isRequired
}