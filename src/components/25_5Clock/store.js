import { configureStore } from '@reduxjs/toolkit';
import Clock25_5Slice from "./features/clock25_5Slice.js";
export const Store = configureStore({
    reducer: {
        clock25_5: Clock25_5Slice,
    }
})