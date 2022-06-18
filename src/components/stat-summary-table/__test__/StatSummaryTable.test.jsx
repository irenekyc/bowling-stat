import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import StatSummaryTable from "../index";
import { SUMMARY_DOUBLE } from "../../../constants/summary";

describe("Summary Stat Table", () => {
  const mockColumns = [
    {
      Header: "Header",
      accessor: "data",
    },
    {
      Header: "Sortable Header",
      accessor: "datasort",
      sortable: true,
    },
    {
      Header: "Grouped Header",
      accessor: "game_group",
      sortable: true,
    },
    {
      Header: "Event",
      accessor: "Event Id",
    },
  ];
  const mockData = [
    {
      "Event Id": 1,
      game_group: 1,
      data: 1,
      datasort: 1,
    },
    {
      "Event Id": 1,
      game_group: 1,
      data: 2,
      datasort: 2,
    },
  ];
  it("Render Stat Bowler Table - without title", () => {
    render(<StatSummaryTable columns={mockColumns} data={mockData} />);
    const statTable = screen.queryByTestId("summary-stat-table-div");
    expect(statTable).toBeInTheDocument();

    const statTitle = screen.queryByTestId("summary-stat-table-title");
    expect(statTitle).toBeNull();
  });
  it("Render Stat Bowler Table - with title", () => {
    render(
      <StatSummaryTable
        columns={mockColumns}
        data={mockData}
        title={SUMMARY_DOUBLE}
      />
    );
    const statTable = screen.queryByTestId("summary-stat-table-div");
    expect(statTable).toBeInTheDocument();

    const statTitle = screen.queryByTestId("summary-stat-table-title");
    expect(statTitle).not.toBeNull();
    expect(statTitle).toHaveTextContent("Doubles");
  });
});
