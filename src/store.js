import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./redux/team/teamSlice";

const store = configureStore({
  reducer: {
    team: teamReducer,
  },
});

const useAppDispatch = () => store.dispatch;
const useAppSelector = () => store.getState;

export default store;
export { useAppDispatch, useAppSelector };
