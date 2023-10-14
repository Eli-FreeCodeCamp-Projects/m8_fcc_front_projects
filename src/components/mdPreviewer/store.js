import { configureStore } from '@reduxjs/toolkit';
import mdPreviewerReducer from "./features/mdPreviewerSlice.js";
export const Store = configureStore({
    reducer: {
        mdPreviewer: mdPreviewerReducer,
    }
})