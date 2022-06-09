import React from "react";
import StatTableGroupBowler from "./StatTableGroupBowler";
import StatTableGroupGame from "./StatTableGroupGame";
import StatTableFlat from "./StatTableFlat";
import StatTableGroupEvent from "./StatTableGroupEvent";
import StatTableGroupBowlerAll from "./StatTableGroupBowlerAll";
import StatTableBowlerGame from "./StatTableBowlerGame";
import StatTableBowlerEvent from "./StatTableBowlerEvent";
import "./stat-table.scss";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import { transformNameToSlug } from "../../helpers/convertSlugAndName";
import { Link } from "react-router-dom";

const eventColumn = {
  Header: "Event",
  accessor: "Event Id",
  Cell: ({ value }) => (
    <Link to={`/events/${value}`}>
      <strong>{transformEventIdToName(value)}</strong>
    </Link>
  ),
};

const StatTable = ({ title, tableData, group = undefined }) => {
  if (tableData.length === 0) return <></>;
  if (!group) {
    return <StatTableFlat title={title} tableData={tableData} />;
  }
  if (group === "Bowler") {
    return <StatTableGroupBowler title={title} tableData={tableData} />;
  }
  if (group === "Game") {
    return <StatTableGroupGame title={title} tableData={tableData} />;
  }
  if (group === "Bowler-ALL") {
    const { columns } = tableData;
    const bowlerAllColumns = columns
      .filter(
        (column) =>
          column.Header !== "Baker Game" && column.Header !== "Game No"
      )
      .map((column) => {
        let formatedColumn = { ...column };
        if (formatedColumn.Header === "Bowler") {
          formatedColumn = {
            ...formatedColumn,
            Cell: ({ value }) => (
              <Link to={`/bowlers/${transformNameToSlug(value, "bowler")}`}>
                {value}
              </Link>
            ),
          };
        }
        return formatedColumn;
      });
    return (
      <StatTableGroupBowlerAll
        title={title}
        tableData={{
          data: tableData.data,
          columns: bowlerAllColumns,
        }}
      />
    );
  }
  if (group === "Bowler-Game") {
    const { columns } = tableData;
    const bowlerGameColumns = [
      {
        Header: "Event",
        accessor: "Event Id",
        Cell: ({ value }) => <strong>{transformEventIdToName(value)}</strong>,
      },
      ...columns,
    ].filter((column) => column.Header !== "Bowler");
    return (
      <StatTableBowlerGame
        tableData={{
          data: tableData.data,
          columns: bowlerGameColumns,
        }}
        title={title}
      />
    );
  }
  if (group === "Bowler-Event") {
    const { columns } = tableData;
    const bowlerEventColumns = [...columns].filter(
      (column) => column.Header !== "Bowler"
    );
    return (
      <StatTableBowlerEvent
        tableData={{
          data: tableData.data,
          columns: bowlerEventColumns,
        }}
        title={title}
      />
    );
  }
  if (group === "Event") {
    const { columns } = tableData;
    const eventGroupColumns = [eventColumn, ...columns].filter(
      (column) =>
        column.Header !== "Bowler" &&
        column.Header !== "Baker Game" &&
        column.Header !== "Game No"
    );
    return (
      <StatTableGroupEvent
        tableData={{
          data: tableData.data,
          columns: eventGroupColumns,
        }}
        title={title}
      />
    );
  }
  return <div></div>;
};

export default StatTable;
