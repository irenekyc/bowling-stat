import React from "react";
import StatTableGroupBowler from "./StatTableGroupBowler";
import StatTableFlat from "./StatTableFlat";
import "./stat-table.scss";

const StatTable = ({ title, tableData, group = undefined }) => {
  if (!group) {
    return <StatTableFlat title={title} tableData={tableData} />;
  }
  if (group === "Bowler") {
    return <StatTableGroupBowler title={title} tableData={tableData} />;
  }
  return <div></div>;
};

export default StatTable;
