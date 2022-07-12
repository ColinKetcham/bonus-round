import { createSlice } from '@reduxjs/toolkit';

const initState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
