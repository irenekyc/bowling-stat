const transformIndividualData = (summaryData, summaryType) => {
  let data = [];
  const columns = [
    {
      Header: "Bowler",
      accessor: "Bowler",
      Cell: ({ value }) => <strong>{value}</strong>,
    },
    {
      Header: "Game No",
      accessor: "Match Group",
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

  Object.entries(summaryData).forEach(([bowler, entries]) => {
    let entry = { ...entries };
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
  console.log(data);
  return {
    columns,
    data,
  };
};

export default transformIndividualData;
