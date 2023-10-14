import {Outlet} from "react-router-dom";
import {Breadcrumb} from "./breadcrumb.jsx";
import {RootNavBar} from "./navBar.jsx";

/**
 * View home from router
 * @return {JSX.Element}
 * @constructor
 */
export function Root(){


    return(
        <div className="app-main">
            <header className="bg-dark app-header">
                <RootNavBar />
            </header>
            <Breadcrumb />
            <div className='container-fluid p-2 app-content'><Outlet /></div>
        </div>

    )
}