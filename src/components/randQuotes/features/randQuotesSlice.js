import { createSlice } from '@reduxjs/toolkit'
import {quotes} from '../data/quotes.js'
import {ut} from '../../../utils/utils.js'

const MAX_QUOTE_LENGTH = 155;
/**
 * Clean Json Quotes
 * Remove all quotes with length upper-more than MAX_QUOTE_LENGTH.
 *
 **/
const cleanJsonQuotes = (quotes) =>{
    if(Array.isArray(quotes)){
        return quotes.filter((data) => {
            const nb_chars = data.quote.length
            if(nb_chars <= MAX_QUOTE_LENGTH){
                return data
            }
            /*else{
                console.log(`Remove too bigger quote from list. ${nb_chars}/${MAX_QUOTE_LENGTH} -- key : ${key}`)
            }*/
        })
    }
    return [];
}

const getRandomQuoteId = (quotesLength) => {
    return Math.floor(Math.random() * quotesLength)
}

const loadInitialState = () => {

    if(ut.isArray(quotes) && quotes.length > 0){
        return {
            quotes: cleanJsonQuotes(quotes),
            quote: quotes[getRandomQuoteId(quotes.length)]
        }
    }else{
        throw new Error('Redux Error : Unable to load Quotes.')
    }
}

const randQuotesSlice = createSlice({
    name: 'randQuotes',
    initialState: loadInitialState,
    reducers: {
        refreshQuote(state, action){
            if(ut.isArray(state.quotes) && state.quotes.length > 0){
                state.quote = state.quotes[getRandomQuoteId(state.quotes.length)];
            }else{
                state.quote = ''
            }

        }
    }
})

export const { refreshQuote} = randQuotesSlice.actions
export const selectQuote = state => state.randQuotes.quote
export default randQuotesSlice.reducer