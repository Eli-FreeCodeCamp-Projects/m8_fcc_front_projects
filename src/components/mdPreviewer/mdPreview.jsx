import {parse_markdown} from '../../utils/markedParser.js'
import { useSelector } from 'react-redux'
import {selectInputText} from './features/mdPreviewerSlice.js';
import PropTypes from "prop-types";
/**
 * Output Component
 */
export function HtmlPreview({defaultInput}){
    const input_text = useSelector(selectInputText)

    const parseMarkdown = (inputText) => {
        return parse_markdown(inputText)
    }

    return(
        <div
            id="preview"
            className={`container-fluid h-100`}
            dangerouslySetInnerHTML={{ __html: parseMarkdown(input_text??defaultInput) }}
        />
    )
}

HtmlPreview.propTypes = {
    defaultInput: PropTypes.string
}