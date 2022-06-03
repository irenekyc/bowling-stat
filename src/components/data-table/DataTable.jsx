import formatColumnNames from "../../helpers/formatColumnNames";
import Table from "react-bootstrap/Table";
import "./bowling-table.scss";

const DataTable = ({ title = undefined, tableHeader = [], tableData = [] }) => {
  return (
    <div className="bd-table__container">
      {title && <h3 className="bd-table__title">{title}</h3>}
      <Table striped bordered hover>
        <thead>
          <tr>
            {tableHeader.map((header) => (
              <th key={header}>{formatColumnNames(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((entry, index) => (
            <tr key={entry[0] + "-" + index}>
              {entry.map((data) => (
                <td key={tableHeader[0] + "-" + entry[0] + "-" + data}>
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
