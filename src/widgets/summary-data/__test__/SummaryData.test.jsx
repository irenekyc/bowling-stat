import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SummaryDataWidget from "../index";

describe("Render Summary Data Widget", () => {
  it("Render Summary Data Widget with initial state / no data", () => {
    render(<SummaryDataWidget summaryStatistic={[]} />);
    const summaryDataWidget = screen.queryByTestId("summary-statistic-widget");
    expect(summaryDataWidget).toBeNull();
  });

  it("Render Summary Data Widget with  data", () => {
    render(<SummaryDataWidget summaryStatistic={[1, 2, 3, 4]} />);
    const summaryDataWidget = screen.queryByTestId("summary-statistic-widget");
    expect(summaryDataWidget).not.toBeNull();
    const summaryDataSections = screen.queryAllByTestId(
      "summary-stat-table-div"
    );
    expect(summaryDataSections).toHaveLength(4);
    expect(summaryDataSections[0]).toHaveTextContent("Score");
    expect(summaryDataSections[1]).toHaveTextContent("Strikes");
  });
});
