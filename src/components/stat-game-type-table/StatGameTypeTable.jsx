import { useTable, useGroupBy, useExpanded } from "react-table";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

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
    },
    useGroupBy,
    useExpanded
  );

  useEffect(() => {
    setGroupBy(["bowler", "Event Id", "game_group"]);
  }, [setGroupBy]);

  return (
    <div className="bd-table">
      <Table {...getTableProps()} striped bordered hover>
        <thead className="bd-table__header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
