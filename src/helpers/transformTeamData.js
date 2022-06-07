const transformTeamData = (summaryData) => {
  let data = [];

  Object.entries(summaryData).forEach(([_, entries]) => {
    let entry = { ...entries, "Game Type": "Team" };
    if (
      entry.strikes_percentage &&
      typeof entry.strikes_percentage === "string"
    ) {
      entry.strikes_percentage = parseFloat(
        entry.strikes_percentage.replace("%", "")
      );
    }
    if (
      entry.double_percentage &&
      typeof entry.double_percentage === "string"
    ) {
      entry.double_percentage = parseFloat(
        entry.double_percentage.replace("%", "")
      );
    }
    data.push(entry);
  });

  return data;
};

export const teamColumns = [
  { Header: "Game Type", accessor: "Game Type", Aggregated: () => `Team` },
  {
    Header: "Game No",
    accessor: "Match Group",
    Aggregated: () => `All`,
  },
  {
    Header: "Bowler",
    accessor: "Bowler",
    Aggregated: () => `All`,
    Cell: ({ value }) => <strong>{value}</strong>,
  },

  {
    Header: "First Ball Average",
    accessor: "first_ball_ave",
    aggregate: "average",
    Cell: ({ value }) => value.toFixed(2),
  },
  {
    Header: "First Ball Attempts",
    accessor: "first_balls",
    aggregate: "sum",
  },
  {
    Header: "Strikes",
    accessor: "num_strikes",
    aggregate: "sum",
  },
  {
    Header: "Strikes %",
    accessor: "strikes_percentage",
    aggregate: "average",
    Aggregated: ({ value }) => `${value.toFixed(1)}%`,
    Cell: ({ value }) => `${value.toFixed(1)}%`,
  },
  {
    Header: "Spares",
    accessor: "num_spares",
    aggregate: "sum",
  },
  {
    Header: "Doubles",
    accessor: "num_doubles",
    aggregate: "sum",
  },
  {
    Header: "Doubles",
    accessor: "num_double_attempt",
    aggregate: "sum",
  },
  {
    Header: "Double Percentage",
    accessor: "double_percentage",
    aggregate: "average",
    Aggregated: ({ value }) => `${value.toFixed(1)}%`,
    Cell: ({ value }) => `${value.toFixed(1)}%`,
  },
  {
    Header: "Opens",
    accessor: "num_opens",
    aggregate: "sum",
  },
];

export default transformTeamData;
