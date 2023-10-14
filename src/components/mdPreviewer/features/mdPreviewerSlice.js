import { createSlice } from '@reduxjs/toolkit'

const mdPreviewerSlice = createSlice({
    name: 'mdPreviewer',
    initialState: {
        status: true,
        error_msg: '',
        min_resize_width: 768,
        input_text: null
    },
    reducers: {
        refreshPreview: {
            reducer(state, action) {
                // ✅ This "mutating" code is okay inside of createSlice!
                state.input_text = action.payload.input_text
            },
            prepare(input_text) {
                return {
                    payload: { input_text }
                }
            }

        }
    }
})

export const { refreshPreview } = mdPreviewerSlice.actions

export const selectInputText = state => state.mdPreviewer.input_text
export default mdPreviewerSlice.reducer