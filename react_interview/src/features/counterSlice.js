import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    post: {},
  },
  reducers: {
    handlePost: (state, action) => {
      state.post = action.payload
    },
  },
});

export const { handlePost } = counterSlice.actions;

export default counterSlice.reducer;
