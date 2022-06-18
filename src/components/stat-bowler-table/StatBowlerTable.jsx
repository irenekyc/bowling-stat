import { useTable, useGroupBy, useExpanded, useSortBy } from "react-table";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import SortingDropdown from "../sorting-dropdown";

const StatBowlerTable = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    setGroupBy,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGroupBy,
    useSortBy,
    useExpanded
  );

  useEffect(() => {
    setGroupBy(["bowler", "Event Id", "game_type", "game_group"]);
  }, [setGroupBy]);

  return (
    <div className="bd-table" data-testid="bowler-stat-table">
      <Table {...getTableProps()} striped bordered hover responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div
                    className="bd-table__header"
                    data-testid="bowler-stat-table-column-header"
                  >
                    <span>{column.render("Header")}</span>
                    {column.sortable && (
                      <SortingDropdown toggleSortBy={column.toggleSortBy} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="bd-table__cell"
                      data-testid="bowler-stat-table-data"
                    >
                      {/* {? (
                      <span> {cell.render("Cell")} </span>
                    ) :  */}
                      {cell.isGrouped ? (
                        row.groupByID === "game_group" ? (
                          <>
                            <span>{cell.render("Cell")}</span>
                          </>
                        ) : (
                          <>
                            <span
                              {...row.getToggleRowExpandedProps()}
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {cell.render("Cell")}{" "}
                              <span style={{ cursor: "pointer" }}>
                                {row.isExpanded ? "-" : "+"}
                              </span>
                            </span>
                          </>
                        )
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        <strong>{cell.render("Aggregated")}</strong>
                      ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                        // Otherwise, just render the regular cell
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StatBowlerTable;
