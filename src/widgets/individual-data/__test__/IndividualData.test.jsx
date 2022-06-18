import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IndividualDataWidget from "../index";
import {
  BOWLER_TABLE_PAGE_EVENT_ALL,
  BOWLER_TABLE_PAGE_BOWLER_SINGLE,
} from "../../../constants/bowler-table";

describe("Render Individual Data Widget", () => {
  it("Render Individual Data Widget with initial state / no data", () => {
    render(<IndividualDataWidget />);
    const individualDataWidget = screen.queryByTestId("bowler-data-widget");
    expect(individualDataWidget).toBeNull();
  });

  it("Render Individual Data Widget - with data", () => {
    render(
      <IndividualDataWidget
        page={BOWLER_TABLE_PAGE_BOWLER_SINGLE}
        data={[1, 2, 3]}
        bowlerPage="Bowler A"
      />
    );
    const individualDataWidget = screen.queryByTestId("bowler-data-widget");
    expect(individualDataWidget).not.toBeNull();
    const individualDataWidgetTitle = screen.queryByTestId(
      "bowler-data-widget-title"
    );
    expect(individualDataWidgetTitle).toHaveTextContent("Bowler A");
  });
  it("Render Individual Data Widget - with data - individual bowler page with correct title", () => {
    render(
      <IndividualDataWidget
        page={BOWLER_TABLE_PAGE_EVENT_ALL}
        data={[1, 2, 3]}
      />
    );
    const individualDataWidget = screen.queryByTestId("bowler-data-widget");
    expect(individualDataWidget).not.toBeNull();
    const individualDataWidgetTitle = screen.queryByTestId(
      "bowler-data-widget-title"
    );
    expect(individualDataWidgetTitle).toHaveTextContent("Bowlers : All");
  });
});
