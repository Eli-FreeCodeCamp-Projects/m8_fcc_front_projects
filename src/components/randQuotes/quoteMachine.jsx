import {useDispatch} from 'react-redux'
import {refreshQuote} from "./features/randQuotesSlice.js";
import {RandomQuote} from "./randomQuote.jsx";
import {SocialPublisher} from "./socialPublisher.jsx";
/**
 * Random Quote Machine Component
 * @return {JSX.Element}
 * @constructor
 */
export default function QuoteMachine(){
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(refreshQuote())
        const root = document.querySelector(':root');
        const randColor = Math.floor(Math.random() * 11)+1;
        root.style.setProperty('--random-color', `var(--qt-dark-color${randColor})`);
    }
    return(
        <section className="quote-container box-random">
            <div id="quote-box" className="wrapper box-dark">
                <RandomQuote />
                <div className="quote-footer">
                    <SocialPublisher />
                    <div className="quote-refresh">
                        <button id="new-quote" className="btn btn-random" onClick={handleClick}>Next Quote</button>
                    </div>
                </div>
                <div className="app-author text-random">
                    Designed and Coded
                    <strong> Eli Serra</strong>
                </div>
            </div>

        </section>
    )
}