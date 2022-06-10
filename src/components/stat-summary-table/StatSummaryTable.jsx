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
    useExpanded
  );

  useEffect(() => {
    setGroupBy(["All", "bowler"]);
  }, [setGroupBy]);

  return (
    <div className="bd-stat__table__section">
      {title && (
        <h4 className="bd-stat__table__section__title">
          {transformSummaryTableTitle(title)}
        </h4>
      )}
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
                        row.groupByID === "All" ||
                        row.groupByID === "bowler" ? (
                          <span>
                            <span>{cell.render("Cell")}</span>
                          </span>
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
