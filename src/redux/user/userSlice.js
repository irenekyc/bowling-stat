import { createSlice } from "@reduxjs/toolkit";
import fetchUser from "./actions/fetchUser";

export const initialState = {
  details: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.details = action.payload;
      }
    });
  },
});

export default userSlice.reducer;
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
