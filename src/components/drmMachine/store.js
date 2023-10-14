import { configureStore } from '@reduxjs/toolkit';
import drmMachineReducer from './features/drmMachineSlice.js';
export const Store = configureStore({
    reducer: {
        drmMachine: drmMachineReducer,
    }
})