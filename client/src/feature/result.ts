import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResultType, ResultState, ApiResponseType } from "../resources/types";
import { mockData } from "../resources/mock_data";

const initialState: ResultState = {
    data: [],
    meta: {
        total: 0
    },
    status: 'pending'
}

export const getResultsFromAPI = createAsyncThunk('result/getResults', async (page: number) =>{
    const res:ApiResponseType = {
        meta: {
            total: 31
        },
        data: [...Array(15)].map(() => {
            return ( {
                ...mockData,
                sampleId: page.toString()
            });
        })
    }
    return res;
});

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        updateMeta: (state, action: PayloadAction<{ total: number }>) => {
            state.meta.total = action.payload.total;
        },
        updateData: (state, action: PayloadAction<{ data: ResultType[] }>) => {
            state.data = action.payload.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getResultsFromAPI.pending, (state) => {
            state.status = 'pending'
            state.data = [];
        });
        builder.addCase(getResultsFromAPI.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = [...action.payload.data];
            state.meta.total = action.payload.meta.total;
        });
        builder.addCase(getResultsFromAPI.rejected, (state) => {
            state.status = 'rejected';
            state.data = [];
        });
    }
});

export const { updateData, updateMeta }  = resultSlice.actions
export const resultReducer = resultSlice.reducer;