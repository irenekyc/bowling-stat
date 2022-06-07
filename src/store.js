import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./redux/data/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
