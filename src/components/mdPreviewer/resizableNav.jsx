export function ResizableNav({handleExpandWindow, handleComboView}){

    return (
        <nav id="m8-nav-resizable" className="navbar navbar-expand-lg text-bg-dark">
            <div className="container-fluid nav justify-content-end">
                <ul className="nav">
                    <li className="nav-item px-1 left-expand">
                        <button
                            id="m8-left-expand"
                            className="btn btn-outline-light border-0"
                            type="button"
                            aria-expanded="false"
                            aria-controls="m8_left_body"
                            onClick={handleExpandWindow}
                        >
                            <i className="fas fa-code"></i>
                        </button>
                    </li>
                    <li className="nav-item px-1 combo-expand">
                        <button
                            id="m8-expand-combo"
                            className="btn btn-outline-light border-0 active"
                            type="button"
                            aria-expanded="false"
                            onClick={handleComboView}
                        >
                            <i className="fas fa-columns"></i>
                        </button>
                    </li>
                    <li className="nav-item px-1 right-expand">
                        <button
                            id="m8-right-expand"
                            className="btn btn-outline-light border-0"
                            type="button"
                            aria-expanded="false"
                            aria-controls="m8_right_body"
                            onClick={handleExpandWindow}
                        >
                            <i className="fas fa-file-image"></i>
                        </button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}