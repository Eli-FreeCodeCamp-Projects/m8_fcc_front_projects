import { useEffect } from 'react'
import {defaultInput} from "../../../../Front End/fcc_MarkdownPreviewer/src/utils/defaultInput.js";
import {useDispatch } from 'react-redux'
import {refreshPreview} from '../../../../Front End/fcc_MarkdownPreviewer/src/features/mdPreviewer/mdPreviewerSlice.js';

/**
 * Editor Component
 */
export function InputEditor(){
    const dispatch = useDispatch()
    useEffect(() => {
        const element = document.getElementById('editor');
        if(!element.value){
            element.value = defaultInput;
        }
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(refreshPreview(value))
    }

    return(
        <div className={`container-fluid p-0`}>
            <div className="form-floating">
                    <textarea
                        id="editor"
                        name="editor"
                        className="form-control text-bg-dark border-0"
                        onChange={handleChange}>

                    </textarea>
                <label htmlFor="editor">Type your Markdown</label>

            </div>
        </div>
    )
}