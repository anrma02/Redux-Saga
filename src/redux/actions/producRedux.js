import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk('get/fetchApi', async () => {
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
    reducers: {
        addProductRequest: (state) => {
            state.loading = true;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
        },
        addProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
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

export const { addProductFailure, addProductSuccess, addProductRequest } = apiAction.actions;

export default apiAction.reducer;
