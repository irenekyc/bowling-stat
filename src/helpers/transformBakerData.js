const transformBakerData = (summaryData) => {
  let data = [];

  Object.entries(summaryData).forEach(([_, entries]) => {
    let entry = { ...entries, "Game Type": "Baker" };

    if (
      entry.strikes_percentage &&
      typeof entry.strikes_percentage === "string"
    ) {
      entry.strikes_percentage = parseFloat(
        entry.strikes_percentage.replace("%", "")
      );
    }
    data.push(entry);
  });
  return data;
};

export const bakerColumns = [
  {
    Header: "Baker Game",
    accessor: "Match Group",
    Aggregated: () => `All`,
  },
  {
    Header: "Game Type",
    accessor: "Game Type",
    Aggregated: () => `Baker`,
  },
  {
    Header: "Bowler",
    accessor: "Bowler",
    Cell: ({ value }) => <strong>{value}</strong>,
    Aggregated: () => `All`,
  },
  {
    Header: "First Ball Average",
    accessor: "first_ball_ave",
    aggregate: "average",
    Cell: ({ value }) => value.toFixed(2),
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
    Header: "Strikes/Game",
    accessor: "strike_per_game",
    aggregate: "average",
    Cell: ({ value }) => value.toFixed(2),
  },
  {
    Header: "Spares",
    accessor: "num_spares",
    aggregate: "sum",
  },
  {
    Header: "Spares/Game",
    accessor: "spare_per_game",
    aggregate: "average",
    Cell: ({ value }) => value.toFixed(2),
  },
  {
    Header: "Opens",
    accessor: "num_opens",
    aggregate: "sum",
  },
  {
    Header: "Opens/Game",
    accessor: "open_per_game",
    aggregate: "average",
    Cell: ({ value }) => value.toFixed(2),
  },
];

export default transformBakerData;
