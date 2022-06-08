import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./redux/data/dataSlice";
import teamReducer from "./redux/team/teamSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    team: teamReducer,
  },
});
