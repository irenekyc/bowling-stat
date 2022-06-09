import { createAsyncThunk } from "@reduxjs/toolkit";
import quWomenData from "../../../data/qu-women-all.json";
import staticTeamMetaData from "../../../static/team";

const staticData = {
  ["qu-women"]: quWomenData,
};

const fetchTeamData = createAsyncThunk("fetchTeamData", async (teamId) => {
  let statistic = [];
  let bowlers = [];
  let events = [];
  // fetch details
  if (staticTeamMetaData[teamId]) {
    bowlers = staticTeamMetaData[teamId].bowlers;
    events = staticTeamMetaData[teamId].events;
  }
  if (staticData[teamId]) {
    statistic = staticData[teamId];
  }
  return {
    team: teamId,
    statistic,
    bowlers,
    events,
  };
});

export default fetchTeamData;
