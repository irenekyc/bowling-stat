import configureStore from "redux-mock-store";
import { initialState as initialTeamState } from "../../redux/team/teamSlice";

const middlewares = [];
export const mockStore = configureStore(middlewares);
export const mockInitialState = mockStore({ team: initialTeamState });
export const mockDataState = mockStore({
  team: {
    bowlers: [],
    events: [
      {
        id: "all--2021-2022",
        name: "All",
      },
      {
        id: "event--2021-2022",
        name: "Event",
      },
    ],
    statistic: [],
    summaryStatistic: [],
    team: undefined,
  },
});
