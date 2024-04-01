import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk('posts/fetchApi', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.status === 200 ? response.data : Promise.reject(new Error('Failed to fetch data'));
    } catch (error) {
        throw new Error(error);
    }
});

const apiAction = createSlice({
    name: 'api',
    initialState: {
        loading: false,
        error: false,
        data: [],
    },
    reducers: {
        fetchRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.data = [];
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchRequest, fetchSuccess, fetchFailure } = apiAction.actions;

export default apiAction.reducer;
