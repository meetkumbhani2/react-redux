import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counterSlice"

const store = configureStore({
  reducer: {
    Post: counterReducer,
  },
});

export default store;
