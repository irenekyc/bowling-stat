import { createAsyncThunk } from "@reduxjs/toolkit";
import quWomenData from "../../../data/qu-women-all.json";
import quMenData from "../../../data/qu-men-all.json";
// import staticTeamMetaData from "../../../static/team";
import quWomenSummaryData from "../../../data/qu-women-summary-all.json";
import quMenSummaryData from "../../../data/qu-men-summary-all.json";
import axios from "axios";

const staticData = {
  "qu-women": quWomenData,
  "qu-men": quMenData,
};

const staticSummaryData = {
  "qu-women": quWomenSummaryData,
  "qu-men": quMenSummaryData,
};

const fetchTeamData = createAsyncThunk("fetchTeamData", async (teamId) => {
  let statistic = [];
  let bowlers = [];
  let events = [];
  let summaryStatistic = [];

  // TODO: should fetch from API / google spreadsheet
  try {
    const teamData = await axios.get(
      `https://fierce-plateau-64816.herokuapp.com/teams/${teamId}`
    );
    const teamEventData = await axios.get(
      `https://fierce-plateau-64816.herokuapp.com/teams/${teamId}/events`
    );
    statistic = teamEventData.data.data.eventdata;
    events = teamData.data.events.includes(",")
      ? teamData.data.events.split(",")
      : [teamData.data.events];
    if (events.length > 1) {
      events = [
        {
          id: "all-events--2021-2022",
          name: "All Events (2021 - 2022)",
          location: undefined,
          startDate: undefined,
          endDate: undefined,
        },
        ...events,
      ];
    }
    bowlers = teamData.data.bowlers.split(",");
    summaryStatistic = teamEventData.data.data.eventsummary;
  } catch (err) {
    console.log(err);
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
