const transformBakerMatchPlayData = (summaryData) => {
  let data = [];
  const columns = [
    {
      Header: "Game No",
      accessor: "Match No",
      Aggregated: () => `All`,
    },
    {
      Header: "Bowler",
      accessor: "Bowler",
      Aggregated: () => `All`,
      Cell: ({ value }) => <strong>{value}</strong>,
    },
    {
      Header: "Frames",
      accessor: "frames",
      aggregate: "sum",
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
      accessor: "strike_percentage",
      aggregate: "average",
      Aggregated: ({ value }) => `${value.toFixed(1)}%`,
      Cell: ({ value }) => `${value.toFixed(1)}%`,
    },
    {
      Header: "First Ball Average",
      accessor: "first_ball_ave",
      aggregate: "average",
      Cell: ({ value }) => value.toFixed(2),
    },
    {
      Header: "Spares",
      accessor: "num_spares",
      aggregate: "sum",
    },
    {
      Header: "Opens",
      accessor: "num_opens",
      aggregate: "sum",
    },
  ];

  Object.entries(summaryData).forEach(([_, entries]) => {
    let entry = { ...entries };
    if (
      entry.strike_percentage &&
      typeof entry.strike_percentage === "string"
    ) {
      entry.strike_percentage = parseFloat(
        entry.strike_percentage.replace("%", "")
      );
    }

    data.push(entry);
  });

  return {
    columns,
    data,
  };
};

export default transformBakerMatchPlayData;
