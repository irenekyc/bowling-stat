import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./redux/team/teamSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
  },
});
