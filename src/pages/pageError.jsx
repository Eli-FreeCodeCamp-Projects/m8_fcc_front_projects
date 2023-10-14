import {useRouteError} from "react-router-dom";

/**
 * View single from router
 * @return {JSX.Element}
 * @constructor
 */
export function PageError(){
    const error = useRouteError()
    return(
        <>
            <h1>Error : </h1>
            <p>
                {error?.error?.toString() ?? error?.toString()}
            </p>
        </>

    )
}