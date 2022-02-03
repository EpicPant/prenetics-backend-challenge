import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

export interface PaginationState {
    current_page: number;
    total_page: number;
    limit: number;
}

const initialState: PaginationState = {
    current_page: 1,
    total_page: 10,
    limit: 15
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        updateTotalPage: (state, action: PayloadAction<{ total_page: number }>) => {
            state.total_page = action.payload.total_page
        },
        nextPage: (state) => {
            if (state.current_page < state.total_page) {
                state.current_page++;
            }
        },
        prevPage: (state) => {
            if (state.current_page > 1 ) {
                state.current_page--;
            }
        },
        goToPage: (state, action: PayloadAction<{ current_page: number }>) => {
            if (action.payload.current_page > 0 && action.payload.current_page <= state.total_page) {
                state.current_page = action.payload.current_page;
            }
        }
    }
});

export const { updateTotalPage, nextPage, prevPage, goToPage } = paginationSlice.actions;
export default paginationSlice.reducer;