import {
  DATA_SUMMARY_TYPE_STRIKES,
  DATA_SUMMARY_TYPE_DOUBLE,
  DATA_SUMMARY_TYPE_FIRST_BALL_AVERAGE,
} from "../constants/data";

const transformSummaryStrikesData = (summaryData) => {
  let data = [];
  const columns = [
    {
      Header: "",
      id: "Bowler",
      Cell: ({ value }) => {
        return <h6>{value}</h6>;
      },
      // First group columns
      columns: [
        {
          Header: "Bowler",
          accessor: "bowler",
          Cell: ({ value }) => {
            return <h6 style={{ whiteSpace: "nowrap" }}>{value}</h6>;
          },
        },
      ],
    },
    {
      // Second group - Details
      Header: "Team",
      // Second group columns
      columns: [
        {
          Header: "Strikes",
          accessor: "team__num_strikes",
        },
        {
          Header: "Attempts",
          accessor: "team__attempts",
        },
        {
          Header: "Percentage",
          accessor: "team__strike_percentage",
        },
      ],
    },
    {
      // Third group - Details
      Header: "Baker",
      // Third group columns
      columns: [
        {
          Header: "Strikes",
          accessor: "baker__num_strikes",
        },
        {
          Header: "Attempts",
          accessor: "baker__attempts",
        },
        {
          Header: "Percentage",
          accessor: "baker__strike_percentage",
        },
      ],
    },
    {
      // Fourth group - Details
      Header: "Baker Match Play",
      // Fourth group columns
      columns: [
        {
          Header: "Strikes",
          accessor: "baker_match__num_strikes",
        },
        {
          Header: "Attempts",
          accessor: "baker_match__attempts",
        },
        {
          Header: "Percentage",
          accessor: "baker_match__strike_percentage",
        },
      ],
    },
    {
      // Fifth group - Details
      Header: "Overall",
      // Fifth group columns
      columns: [
        {
          Header: "Strikes",
          accessor: "all__num_strikes",
        },
        {
          Header: "Attempts",
          accessor: "all__attempts",
        },
        {
          Header: "Percentage",
          accessor: "all__strike_percentage",
        },
      ],
    },
  ];

  Object.entries(summaryData).forEach(([bowler, entries]) => {
    let entry = { bowler, ...entries };
    data.push(entry);
  });

  return {
    columns,
    data,
  };
};

const transformSummaryDoubleData = (summaryData) => {
  let data = [];
  const columns = [
    {
      Header: "",
      id: "Bowler",
      Cell: ({ value }) => {
        return <h6>{value}</h6>;
      },
      // First group columns
      columns: [
        {
          Header: "Bowler",
          accessor: "bowler",
          Cell: ({ value }) => {
            return <h6 style={{ whiteSpace: "nowrap" }}>{value}</h6>;
          },
        },
      ],
    },
    {
      // Second group - Details
      Header: "Team",
      // Second group columns
      columns: [
        {
          Header: "Double",
          accessor: "num_doubles",
        },
        {
          Header: "Attempts",
          accessor: "num_double_attempts",
        },
        {
          Header: "Percentage",
          accessor: "double_percentage",
        },
      ],
    },
  ];

  Object.entries(summaryData).forEach(([bowler, entries]) => {
    let entry = { bowler, ...entries };
    data.push(entry);
  });

  return {
    columns,
    data,
  };
};

const transformSummaryFirstBallData = (summaryData) => {
  let data = [];
  const columns = [
    {
      Header: "",
      id: "Bowler",
      Cell: ({ value }) => {
        return <h6>{value}</h6>;
      },
      // First group columns
      columns: [
        {
          Header: "Bowler",
          accessor: "bowler",
          Cell: ({ value }) => {
            return <h6 style={{ whiteSpace: "nowrap" }}>{value}</h6>;
          },
        },
      ],
    },
    {
      // Second group - Details
      Header: "Team",
      // Second group columns
      columns: [
        {
          Header: "Average",
          accessor: "team__first_ball_ave",
          Cell: ({ value }) => {
            return <span>{value.toFixed(2)}</span>;
          },
        },
      ],
    },
    {
      // Third group - Details
      Header: "Baker",
      // Third group columns
      columns: [
        {
          Header: "Average",
          accessor: "baker__first_ball_ave",
          Cell: ({ value }) => {
            return <span>{value.toFixed(2)}</span>;
          },
        },
      ],
    },
    {
      // Fourth group - Details
      Header: "Baker Match Play",
      // Fourth group columns
      columns: [
        {
          Header: "Average",
          accessor: "baker_match__first_ball_ave",
          Cell: ({ value }) => {
            return <span>{value.toFixed(2)}</span>;
          },
        },
      ],
    },
    {
      // Fifth group - Details
      Header: "Overall",
      // Fifth group columns
      columns: [
        {
          Header: "Average",
          accessor: "all__first_ball_ave",
          Cell: ({ value }) => {
            return <span>{value.toFixed(2)}</span>;
          },
        },
      ],
    },
  ];

  Object.entries(summaryData).forEach(([bowler, entries]) => {
    let entry = { bowler, ...entries };
    data.push(entry);
  });

  return {
    columns,
    data,
  };
};

const transformSummaryData = (summaryData, summaryType) => {
  switch (summaryType) {
    case DATA_SUMMARY_TYPE_STRIKES:
      return transformSummaryStrikesData(summaryData);
    case DATA_SUMMARY_TYPE_DOUBLE:
      return transformSummaryDoubleData(summaryData);
    case DATA_SUMMARY_TYPE_FIRST_BALL_AVERAGE:
      return transformSummaryFirstBallData(summaryData);
    default:
      return {
        columns: [],
        data: [],
      };
  }
};

export default transformSummaryData;
