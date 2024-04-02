import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, aciton) => {
            state.count += aciton.payload;
        },
        decrement: (state, aciton) => {
            state.count -= aciton.payload;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
