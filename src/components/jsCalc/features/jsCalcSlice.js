import {createSlice} from '@reduxjs/toolkit'
import {CalcHelper} from "../assets/calcHelper.js";
import {ut} from "../../../utils/utils.js";

const jsCalcSlice = createSlice({
    name: 'jsCalc',
    initialState: {
        lastKey: '',
        history: [],
        output: '0'
    },
    reducers: {
        clearDisplay(state){
            state.history = [];
            state.output = '0';
            state.lastKey = '';
        },
        delKey(state){
            if(ut.isStr(state.output) && state.output.length > 1){
                state.output = state.output.slice(0, -1);
            }else{
                state.output = '0';
            }

        },
        addKey(state, action){
            const key = action.payload
            if(CalcHelper.isEqualChar(key)){
                const result = CalcHelper.getResult(state.output)
                if(ut.isStr(result)){
                    state.history.push(`${state.output} = ${result}`)
                    state.output = result;
                }

            }else{
                const errorsMsg = ['Infinity', 'NaN']
                if(errorsMsg.includes(state.output)){
                    state.output = '0'
                }
                state.output = CalcHelper.setNewOutput(state.output, key);
            }

        },
        setOutput(state, action){
            state.output = action.payload;
            state.lastKey = '';
        },
        setHistory: {
            reducer(state, action) {
                // ✅ This "mutating" code is okay inside of createSlice!
                state.history = action.payload.history
                state.output = action.payload.output
            },
            prepare(value) {
                return {
                    inputValue: value,
                    output: value
                }

            }

        },
    }
})

export const {
    clearDisplay,
    addKey,
    setOutput,
    setHistory,
    delKey
} = jsCalcSlice.actions
export const selectLastKey = state => state.jsCalc.lastKey
export const selectHistory = state => state.jsCalc.history
export const selectOutput = state => state.jsCalc.output
export default jsCalcSlice.reducer