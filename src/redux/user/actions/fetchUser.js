import { createAsyncThunk } from "@reduxjs/toolkit";

const staticUserDetails = {
  teamName: "QU Women",
  events: [
    "big-red-invite--2021-2022",
    "flyer-classic--2021-2022",
    "peacocks-classic--2021-2022",
  ],
  bowlers: [],
};

const fetchUser = createAsyncThunk("fetchUser", async () => {
  // fetch details
  return staticUserDetails;
});

export default fetchUser;
