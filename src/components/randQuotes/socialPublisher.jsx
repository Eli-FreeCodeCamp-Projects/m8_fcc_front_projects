import {IconLink} from "../iconLink.jsx";
import {TumblrHelper, TweeterHelper} from "../../utils/socialHelper.js";
import {useSelector} from "react-redux";
import {selectQuote} from "./features/randQuotesSlice.js";

/**
 * Social Publisher Component
 * @return {JSX.Element}
 * @constructor
 */
export function SocialPublisher(){
    const quote = useSelector(selectQuote)
    return(
        <div className="quote-publish">
            <IconLink
                linkClass="text-random"
                linkId="tweet-quote"
                link={TweeterHelper.getShareLink('quotes', 'freecodecamp', `"${quote.quote}" ${quote.author}`)}
                linkRel="noreferrer"
                linkTarget="_blank"
                iconClass="fab fa-twitter"
            />
            <IconLink
                linkClass="text-random"
                linkId="tumblr-quote"
                link={TumblrHelper.getShareLink('quote', 'quotes,freecodecamp', quote.author??'', quote.quote??'')}
                linkRel="noreferrer"
                linkTarget="_blank"
                iconClass="fab fa-tumblr"
            />
        </div>
    )
}