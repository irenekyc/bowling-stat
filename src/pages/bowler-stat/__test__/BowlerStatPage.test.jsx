import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BowlerStatPage from "../index";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { mockInitialState } from "../../../helpers/__test__/test-utlis";
import TeamApp from "../../team/Team";

describe("Render Bowler Stat Page", () => {
  it("Render Bowler Stat - All", () => {
    render(
      <Router
        location={{
          pathname: "/bowlers/all",
        }}
      >
        <Provider store={mockInitialState}>
          <TeamApp>
            <BowlerStatPage />
          </TeamApp>
        </Provider>
      </Router>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    const title = screen.getByTestId("bowler-stat-page--bowler-name");
    expect(title).toHaveTextContent("All");
    const eventDataTable = screen.getByTestId("bowler-data-table-by-event");
    expect(eventDataTable).toBeInTheDocument();
    const gameDataTable = screen.getByTestId("bowler-data-table-by-game-type");
    expect(gameDataTable).toBeInTheDocument();
  });
  it("Render Bowler Stat - individual bowler", () => {
    render(
      <Router
        location={{
          pathname: "/bowlers/bowler-a",
        }}
      >
        <Provider store={mockInitialState}>
          <TeamApp>
            <BowlerStatPage />
          </TeamApp>
        </Provider>
      </Router>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    const title = screen.getByTestId("bowler-stat-page--bowler-name");
    expect(title).toHaveTextContent("Bowler A");
    const eventDataTable = screen.getByTestId("bowler-data-table-by-event");
    expect(eventDataTable).toBeInTheDocument();
    const gameDataTable = screen.getByTestId("bowler-data-table-by-game-type");
    expect(gameDataTable).toBeInTheDocument();
  });
});
