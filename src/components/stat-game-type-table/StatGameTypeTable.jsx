import { useTable, useGroupBy, useExpanded, useSortBy } from "react-table";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import SortingDropdown from "../sorting-dropdown";

const StatGameTypeTable = ({ data, columns }) => {
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
      initialState: {
        expanded: {
          "All:undefined": true,
        },
      },
    },
    useGroupBy,
    useSortBy,
    useExpanded
  );

  useEffect(() => {
    setGroupBy(["All", "bowler", "Event Id", "game_group"]);
  }, [setGroupBy]);

  return (
    <div className="bd-table" data-testid="game-type-stat-table">
      <Table {...getTableProps()} striped bordered hover responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  data-testid="game-type-stat-column-header"
                >
                  <div className="bd-table__header">
                    <span>{column.render("Header")}</span>
                    {column.sortable && (
                      <SortingDropdown
                        toggleSortBy={column.toggleSortBy}
                        descLabel={
                          column.id === "game_group" ? "Descending" : undefined
                        }
                        ascLabel={
                          column.id === "game_group" ? "Ascending" : undefined
                        }
                      />
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
                    <td {...cell.getCellProps()} className="bd-table__cell">
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

export default StatGameTypeTable;
