import {Link} from "react-router-dom";
import PropTypes from "prop-types";
/**
 * View project Item from router
 * @return {JSX.Element}
 * @constructor
 */
export function ProjectItem({header, imageLink, imageAlt, description, projectLink}){
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card text-bg-dark border-light">
                <div className="card-header border-light">
                    <h2><Link to={projectLink}>{header}</Link></h2>
                </div>
                <Link to={projectLink} className="project-img-link">
                    <img
                        src={(imageLink) ? imageLink : '/img/image-regular.svg'}
                        className="card-img-top project-img"
                        alt={imageAlt} />
                </Link>
                <div className="card-footer">
                    {description}
                </div>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    header: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired
}