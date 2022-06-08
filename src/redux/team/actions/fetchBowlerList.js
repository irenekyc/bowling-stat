import { createAsyncThunk } from "@reduxjs/toolkit";
import staticTeamData from "../../../static/team";

const fetchBowlerList = createAsyncThunk("fetchBowlerList", async (teamId) => {
  let bowlers = [];
  // fetch details
  if (staticTeamData[teamId]) {
    bowlers = staticTeamData[teamId].bowlers;
  }
  return bowlers;
});

export default fetchBowlerList;
