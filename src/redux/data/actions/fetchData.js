import { createAsyncThunk } from "@reduxjs/toolkit";
import allBaker from "../../../data/update/all/baker.json";
import allTeam from "../../../data/update/all/team.json";
import allBakerMatch from "../../../data/update/all/baker-match-play.json";
import transformBakerData from "../../../helpers/transformBakerData";
import transformTeamData from "../../../helpers/transformTeamData";
import transformBakerMatchPlayData from "../../../helpers/transformBakerMatchPlayData";

const fetchData = createAsyncThunk("fetchData", async () => {
  let data = {
    baker: transformBakerData(allBaker),
    team: transformTeamData(allTeam),
    bakerMatch: transformBakerMatchPlayData(allBakerMatch),
  };

  return data;
});

export default fetchData;
