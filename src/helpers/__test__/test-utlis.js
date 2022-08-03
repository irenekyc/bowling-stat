import configureStore from "redux-mock-store";
import { initialState as initialTeamState } from "../../redux/team/teamSlice";
import { rest } from "msw";
import { setupServer } from "msw/node";
import teamList from "./__data/teamList.json";
import mockTeam from "./__data/mockTeam.json";
import mockTeamEvents from "./__data/mockTeamEvents.json";

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

const handlers = [
  rest.get(
    "https://fierce-plateau-64816.herokuapp.com/teams",
    (_, res, ctx) => {
      return res(ctx.json(teamList));
    }
  ),
  rest.get(
    "https://fierce-plateau-64816.herokuapp.com/teams/qu-women/events",
    (_, res, ctx) => {
      return res(ctx.json(mockTeamEvents));
    }
  ),
  rest.get(
    "https://fierce-plateau-64816.herokuapp.com/teams/qu-women",
    (_, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.get(
    "https://fierce-plateau-64816.herokuapp.com/teams/*",
    (_, res, ctx) => {
      return res(ctx.json({}));
    }
  ),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
