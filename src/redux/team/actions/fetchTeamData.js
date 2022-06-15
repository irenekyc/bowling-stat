import { createAsyncThunk } from "@reduxjs/toolkit";
import quWomenData from "../../../data/qu-women-all.json";
import quMenData from "../../../data/qu-men-all.json";
// import staticTeamMetaData from "../../../static/team";
import quWomenSummaryData from "../../../data/qu-women-summary-all.json";
import quMenSummaryData from "../../../data/qu-men-summary-all.json";

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

  if (staticData[teamId]) {
    statistic = staticData[teamId];
  }
  if (staticSummaryData[teamId]) {
    summaryStatistic = staticSummaryData[teamId];
    // get a list of bowler name
    const bowlersAll = summaryStatistic.map(
      (summaryEntry) => summaryEntry.bowler
    );
    bowlers = [...new Set(bowlersAll)];
    // get a list of event data
    const eventAll = summaryStatistic.map((summaryEntry) => {
      return {
        id: summaryEntry["Event Id"],
        name: summaryEntry["Event Name"],
        location: summaryEntry.Location,
        startDate: new Date(summaryEntry.start_date).toLocaleDateString(),
        endDate: new Date(summaryEntry.end_date).toLocaleDateString(),
      };
    });
    const eventIdsAll = summaryStatistic.map(
      (summaryEntry) => summaryEntry["Event Id"]
    );
    const eventIds = [...new Set(eventIdsAll)];
    eventIds.forEach((id) => {
      const eventData = eventAll.filter((event) => event.id === id)[0];
      events.push(eventData);
    });
    if (events.length > 0) {
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
