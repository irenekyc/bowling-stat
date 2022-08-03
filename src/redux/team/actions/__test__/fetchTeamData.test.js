import store from "../../../../store";

import { fetchTeamData } from "../../actions";
import { server } from "../../../../helpers/__test__/test-utlis";

beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("Should fetch data", async () => {
  const mockTeamId = "qu-women";
  await store.dispatch(fetchTeamData(mockTeamId));
  const state = store.getState();
  const teamState = state.team;
  expect(teamState.team).toEqual(mockTeamId);
  expect(teamState.events.length).toBeGreaterThan(0);
  expect(teamState.bowlers.length).toBeGreaterThan(0);
});

test("Should fetch data - non exisiting team , should have no data", async () => {
  const mockTeamId = "random-team";
  await store.dispatch(fetchTeamData(mockTeamId));
  const state = store.getState();
  const teamState = state.team;
  expect(teamState.team).toEqual(mockTeamId);
  expect(teamState.events.length).toEqual(0);
  expect(teamState.bowlers.length).toEqual(0);
});
