import { createAsyncThunk } from "@reduxjs/toolkit";
// import allBaker from "../../../data/update/all/all-baker-data.json";
// import allTeam from "../../../data/update/all/all-team-data.json";
// import allBakerMatch from "../../../data/update/all/all-baker-match-play-data.json";
// import transformBakerData from "../../../helpers/transformBakerData";
// import transformTeamData from "../../../helpers/transformTeamData";
// import transformBakerMatchPlayData from "../../../helpers/transformBakerMatchPlayData";
import quwomenData from "../../../data/qu-women-all.json";

const fetchData = createAsyncThunk("fetchData", async (teamId) => {
  let data = [];
  if (teamId === "qu-women") {
    data = quwomenData;
  }
  // let data = {
  //   baker: transformBakerData(allBaker),
  //   team: transformTeamData(allTeam),
  //   bakerMatch: transformBakerMatchPlayData(allBakerMatch),
  // };

  return data;
});

export default fetchData;
