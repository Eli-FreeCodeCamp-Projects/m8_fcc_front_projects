import {useSelector} from 'react-redux'
import {selectQuote} from "./features/randQuotesSlice.js";
/**
 * Random Quote Component
 * @return {JSX.Element}
 * @constructor
 */
export function RandomQuote(){
    const quote = useSelector(selectQuote)
    return(
        <div className="quote-wrapper">
            <div className="text-wrapper" >
                <div className="quote-left-pane">
                    <i className="fa fa-quote-left text-random"></i>
                </div>
                <div className="quote-text-pane">
                    <span id="text" className="quote text-random">{(quote.quote) ? quote.quote : "My Random Quote Machine !!!"}</span>
                </div>
                <div className="quote-right-pane">
                    <i className="fa fa-quote-right text-random"></i>
                </div>
            </div>
            <hr className="border-random" />
            <div id="author" className="text-random">
                {(quote.author) ? quote.author : "by No-Body !!!"}
            </div>
            <hr className="border-random" />
        </div>
    )
}