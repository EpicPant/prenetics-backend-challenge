import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../resources/types';

const initialState: SearchState = {
    value: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateKeyword: (state, action: PayloadAction<SearchState>) => {
            state.value = action.payload.value;
        }
    }
})

export const { updateKeyword } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;