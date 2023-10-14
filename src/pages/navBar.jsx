import {NavLink} from "react-router-dom";
/**
 * View home from router
 * @return {JSX.Element}
 * @constructor
 */
export function RootNavBar(){

    return (
        <nav className="navbar bg-dark navbar-expand-md " data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FreeCodeCamp Projects</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/front-end-projects' className="nav-link" aria-current="page">
                                Front-End
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}