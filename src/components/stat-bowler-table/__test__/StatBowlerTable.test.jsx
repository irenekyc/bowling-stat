import { screen, render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import StatBowlerTable from "../index";

describe("Stat Bowler Table", () => {
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
  it("Render Stat Bowler Table", () => {
    render(<StatBowlerTable columns={mockColumns} data={mockData} />);
    const statTable = screen.queryByTestId("bowler-stat-table");
    expect(statTable).toBeInTheDocument();
    const statColumns = screen.queryAllByTestId(
      "bowler-stat-table-column-header"
    );

    expect(statColumns).toHaveLength(mockColumns.length);

    const sortDropdown = screen.queryAllByTestId("sorting-dropdown");
    expect(sortDropdown).toHaveLength(1);
  });
});
