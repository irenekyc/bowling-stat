import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import EventStatPage from "../index";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { mockDataState } from "../../../helpers/__test__/test-utlis";
import TeamApp from "../../team/Team";

describe("Render Event Stat Page", () => {
  it("Render Event Stat - All", () => {
    render(
      <Router
        location={{
          pathname: "/events/all--2021-2022",
        }}
      >
        <Provider store={mockDataState}>
          <TeamApp>
            <EventStatPage />
          </TeamApp>
        </Provider>
      </Router>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    const title = screen.getByTestId("event-details-page-title");
    expect(title).toHaveTextContent("All (2021-2022)");
    const eventSummaryTable = screen.getByTestId("event-data-table-summary");
    expect(eventSummaryTable).toBeInTheDocument();
    const eventByBowlerTable = screen.getByTestId("event-data-table-by-bowler");
    expect(eventByBowlerTable).toBeInTheDocument();
    const eventGameTypeTable = screen.getByTestId(
      "event-data-table-by-game-type"
    );
    expect(eventGameTypeTable).toBeInTheDocument();
  });

  it("Render Event Stat - individual event", () => {
    render(
      <Router
        location={{
          pathname: "/events/event--2021-2022",
        }}
      >
        <Provider store={mockDataState}>
          <TeamApp>
            <EventStatPage />
          </TeamApp>
        </Provider>
      </Router>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    const title = screen.getByTestId("event-details-page-title");
    expect(title).toHaveTextContent("Event (2021-2022)");
    const eventSummaryTable = screen.getByTestId("event-data-table-summary");
    expect(eventSummaryTable).toBeInTheDocument();
    const eventByBowlerTable = screen.getByTestId("event-data-table-by-bowler");
    expect(eventByBowlerTable).toBeInTheDocument();
    const eventGameTypeTable = screen.getByTestId(
      "event-data-table-by-game-type"
    );
    expect(eventGameTypeTable).toBeInTheDocument();
  });

  it("Render Event Stat - No such event", () => {
    render(
      <Router
        location={{
          pathname: "/events/some-random-event",
        }}
      >
        <Provider store={mockDataState}>
          <TeamApp>
            <EventStatPage />
          </TeamApp>
        </Provider>
      </Router>
    );
    const page = screen.getByTestId("page-layout");
    expect(page).toBeInTheDocument();
    expect(page).toHaveTextContent("404! Event not found");
  });
});
