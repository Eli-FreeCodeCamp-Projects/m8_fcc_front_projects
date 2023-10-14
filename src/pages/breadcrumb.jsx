import {Link, useLocation} from "react-router-dom";
import {ut} from "../utils/utils.js";

/**
 * View home from router
 * @return {JSX.Element}
 * @constructor
 */
export function Breadcrumb(){
    const location = useLocation()
    const getItems = (paths) => {
        if(ut.isStrNotEmpty(paths)){
            const items = paths.split('/').filter((item, index)=>{
                return (index === 0 || index > 0 && ut.isStrNotEmpty(item))
            }),
                nbItems = items.length;
            let linkSlug = ''
            return items.map((slug, key) => {
                if(!ut.isStrNotEmpty(slug) && nbItems > 0){
                    linkSlug += '/'
                    return (<li
                        className="breadcrumb-item text-light"
                        aria-current="page"
                        key={key}>
                        {(nbItems>1) ? (<Link to='/'>Home</Link>) : 'Home'}
                    </li>)
                }else if(ut.isStrNotEmpty(slug) && key > 0){
                    linkSlug += `${slug}/`
                    return (<li
                        className="breadcrumb-item text-light"
                        aria-current="page"
                        key={key}>
                        {(key < nbItems - 1) ? (<Link to={linkSlug}>{slug}</Link>) : slug}
                    </li>)
                }
            })
        }
    }
    return (
        <nav className="app-breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {getItems(location.pathname)}
            </ol>
        </nav>
    )
}