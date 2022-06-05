const transformGameGroupData = (summaryData) => {
  let data = [];
  const columns = [
    {
      Header: "Game No",
      accessor: "Match Group",
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

  Object.entries(summaryData).forEach(([_, entries]) => {
    let entry = { ...entries };
    console.log(entries);
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
  return {
    columns,
    data,
  };
};

export default transformGameGroupData;
