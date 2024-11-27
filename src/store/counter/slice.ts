import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = 0;

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            return state + action.payload;
        },
        reset: () => {
            return initialState;
        },
    }
})

export const { increment, decrement, incrementBy, reset} = counterSlice.actions;
export default counterSlice.reducer;