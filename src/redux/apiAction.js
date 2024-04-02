import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk('posts/fetchApi', async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.status === 200
            ? response.data || []
            : Promise.reject(new Error(`Request failed with status ${response.status}`));
    } catch (error) {
        throw new Error(error);
    }
});

const apiAction = createSlice({
    name: 'api',
    initialState: {
        loading: false,
        error: false,
        status: null,
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchApi.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});

export const { fetchRequest, fetchSuccess, fetchFailure } = apiAction.actions;

export default apiAction.reducer;
