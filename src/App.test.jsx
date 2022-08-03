import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mockInitialState, server } from "./helpers/__test__/test-utlis";
import mockTeamList from "./helpers/__test__/__data/teamList.json";

describe("Start App", () => {
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  it("render home page", () => {
    render(
      <div data-testid="container">
        <MemoryRouter initialEntries={["/"]}>
          <Provider store={mockInitialState}>
            <App />
          </Provider>
        </MemoryRouter>
      </div>
    );
    const page = screen.getByTestId("container");
    expect(page).toBeInTheDocument();

    const teams = screen.queryAllByTestId("home-page-team-list");
    waitFor(() => expect(teams).toHaveLength(mockTeamList.teams.length));
  });
});
