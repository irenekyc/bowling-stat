import { createSlice } from "@reduxjs/toolkit";
import fetchEventList from "./actions/fetchEventList";
import fetchBowlerList from "./actions/fetchBowlerList";

export const initialState = {
  bowlers: [],
  events: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    resetTeam: (state) => {
      state.bowlers = [];
      state.events = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEventList.fulfilled, (state, action) => {
      if (action.payload) {
        state.events = action.payload;
      }
    });
    builder.addCase(fetchBowlerList.fulfilled, (state, action) => {
      if (action.payload) {
        state.bowlers = action.payload;
      }
    });
  },
});

export default teamSlice.reducer;
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
