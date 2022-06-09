import { useTable, useGroupBy, useExpanded } from "react-table";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import transformSummaryTableTitle from "./transformSummaryTableTitle";

const BakerGameStatTable = ({ data, columns, title }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    setGroupBy,
    toggleAllRowsExpanded,
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
    setGroupBy(["All"]);
  }, [setGroupBy]);

  useEffect(() => {
    toggleAllRowsExpanded(true);
  }, [toggleAllRowsExpanded]);

  return (
    <div className="bd-table">
      {title && <h3>{transformSummaryTableTitle(title)}</h3>}
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
                        row.groupByID === "All" ? (
                          <>
                            <span>{cell.render("Cell")}</span>
                          </>
                        ) : (
                          <>
                            <span style={{ whiteSpace: "nowrap" }}>
                              {cell.render("Cell")}{" "}
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

export default BakerGameStatTable;
