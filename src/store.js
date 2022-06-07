import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./redux/data/dataSlice";
import userReducer from "./redux/user/userSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
  },
});
