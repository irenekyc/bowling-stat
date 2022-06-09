import { createAsyncThunk } from "@reduxjs/toolkit";
import quWomenData from "../../../data/qu-women-all.json";
import staticTeamMetaData from "../../../static/team";
import quWomenSummaryData from "../../../data/qu-women-summary-all.json";

const staticData = {
  "qu-women": quWomenData,
};

const staticSummaryData = {
  "qu-women": quWomenSummaryData,
};

const fetchTeamData = createAsyncThunk("fetchTeamData", async (teamId) => {
  let statistic = [];
  let bowlers = [];
  let events = [];
  let summaryStatistic = [];
  // fetch details
  if (staticTeamMetaData[teamId]) {
    bowlers = staticTeamMetaData[teamId].bowlers;
    events = staticTeamMetaData[teamId].events;
  }
  if (staticData[teamId]) {
    statistic = staticData[teamId];
  }
  if (staticSummaryData[teamId]) {
    summaryStatistic = staticSummaryData[teamId];
  }

  return {
    team: teamId,
    statistic,
    bowlers,
    events,
    summaryStatistic,
  };
});

export default fetchTeamData;
