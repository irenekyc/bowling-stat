import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../index";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { mockInitialState, server } from "../../../helpers/__test__/test-utlis";
import mockTeamList from "../../../helpers/__test__/__data/teamList.json";

describe("Render Home Page", () => {
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());
  it("render home page", () => {
    render(
      <MemoryRouter>
        <Provider store={mockInitialState}>
          <Home />
        </Provider>
      </MemoryRouter>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    const pageTitle = screen.getByTestId("home-page-title");
    expect(pageTitle).toHaveTextContent("Teams");
    const teams = screen.queryAllByTestId("home-page-team-list");
    waitFor(() => expect(teams).toHaveLength(mockTeamList.teams.length));
  });
});
