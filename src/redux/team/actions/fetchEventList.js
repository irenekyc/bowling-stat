import { createAsyncThunk } from "@reduxjs/toolkit";
import staticTeamData from "../../../static/team";

const fetchEventList = createAsyncThunk("fetchEventList", async (teamId) => {
  let events = [];
  // fetch details
  if (staticTeamData[teamId]) {
    events = staticTeamData[teamId].events;
  }
  return events;
});

export default fetchEventList;
