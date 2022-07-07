import { useTable, useGroupBy, useExpanded, useSortBy } from "react-table";
import Table from "react-bootstrap/Table";
import transformSummaryTableTitle from "./transformSummaryTableTitle";
import SortingDropdown from "../../components/sorting-dropdown";

const BakerGameStatTable = ({ data, columns, title }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        expanded: {
          "All:undefined": true,
        },
        groupBy: ["All"],
      },
    },
    useGroupBy,
    useSortBy,
    useExpanded
  );

  return (
    <div
      className="bd-stat__table__section"
      data-testid="summary-stat-table-div"
    >
      {title && (
        <h4
          className="bd-stat__table__section__title"
          data-testid="summary-stat-table-title"
        >
          {transformSummaryTableTitle(title)}
        </h4>
      )}
      <Table
        {...getTableProps()}
        striped
        bordered
        hover
        responsive
        data-testid="summary-stat-table"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => {}}
                >
                  <div className="bd-table__header">
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
