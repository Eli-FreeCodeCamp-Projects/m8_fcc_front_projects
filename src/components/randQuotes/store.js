import { configureStore } from '@reduxjs/toolkit';
import randQuotesReducer from "./features/randQuotesSlice.js";
export const Store = configureStore({
    reducer: {
        randQuotes: randQuotesReducer,
    }
})