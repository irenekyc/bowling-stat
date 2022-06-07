import { useEffect } from "react";
import { useTable, useGroupBy } from "react-table";
import Table from "react-bootstrap/Table";

const StatTableGroupBowler = ({ title, tableData }) => {
  const { columns, data } = tableData;

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
    useGroupBy
  );

  useEffect(() => {
    setGroupBy(["Bowler"]);
  }, [setGroupBy]);

  return (
    <div className="bd-table">
      {title && <h3 className="bd-table__title">{title}</h3>}

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
                      {cell.isGrouped ? (
                        <>
                          <span style={{ whiteSpace: "nowrap" }}>
                            {cell.render("Cell")}{" "}
                          </span>
                        </>
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

export default StatTableGroupBowler;
