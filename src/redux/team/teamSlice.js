import { createSlice } from "@reduxjs/toolkit";
import fetchTeamData from "./actions/fetchTeamData";

export const initialState = {
  bowlers: [],
  events: [],
  statistic: [],
  team: undefined,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload;
    },
    resetTeam: (state) => {
      state.bowlers = [];
      state.events = [];
      state.statistic = [];
      state.team = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTeamData.fulfilled, (state, action) => {
      if (action.payload) {
        const { bowlers, statistic, events, team } = action.payload;
        state.bowlers = bowlers;
        state.events = events;
        state.statistic = statistic;
        state.team = team;
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
