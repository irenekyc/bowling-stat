import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./actions/fetchData";

export const initialState = {
  data: {
    baker: [],
    team: [],
    bakerMatch: [],
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
  },
});

export default dataSlice.reducer;
// Add Slice Reducers to the Store​
// Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducers parameter, we tell the store to use this slice reducer function to handle all updates to that state.

// app/store.js
// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })
