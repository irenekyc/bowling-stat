import configureStore from "redux-mock-store";
import { initialState as initialTeamState } from "../../redux/team/teamSlice";

const middlewares = [];
export const mockStore = configureStore(middlewares);
export const mockInitialState = mockStore({ team: initialTeamState });
export const mockDataState = mockStore({
  team: {
    bowlers: [],
    events: ["all--2021-2022", "event--2021-2022"],
    statistic: [],
    summaryStatistic: [],
    team: undefined,
  },
});
