import { configureStore } from '@reduxjs/toolkit';
import jsCalcReducer from "./features/jsCalcSlice.js";
export const Store = configureStore({
    reducer: {
        jsCalc: jsCalcReducer,
    }
})