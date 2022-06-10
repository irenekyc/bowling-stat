export const summaryScoreColumns = [
  { Header: "All", Cell: () => "All", expanded: true },
  // { Header: "Event", accessor: "Event Id" },
  {
    Header: "Bowler",
    accessor: "bowler",
  },
  {
    Header: "Baker",
    columns: [
      {
        Header: "Frames",
        accessor: "baker_num_frames",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Frame Average",
        accessor: "baker_frame_ave",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Frames",
        accessor: "team_num_frames",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Frame Average",
        accessor: "team_frame_ave",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
      },
    ],
  },
  {
    Header: "Baker Match Play",
    columns: [
      {
        Header: "Frames",
        accessor: "baker_mp_num_frames",
        aggregate: "sum",
        Cell: ({ value }) => value.toFixed(0),
      },
      {
        Header: "Frame Average",
        accessor: "baker_mp_frame_ave",
        aggregate: "average",
        Cell: ({ value }) => value.toFixed(2),
      },
    ],
  },
  {
    Header: "All",
    columns: [
      {
        Header: "Frames",
        accessor: "all_num_frames",
        aggregate: "sum",
        Cell: ({ value }) => value.toFixed(0),
      },
      {
        Header: "Frame Average",
        accessor: "all_frame_ave",
        aggregate: "average",
        Cell: ({ value }) => value.toFixed(2),
      },
    ],
  },
];

export const summaryStrikesColumns = [
  { Header: "All", Cell: () => "All", expanded: true },
  {
    Header: "Bowler",
    accessor: "bowler",
  },
  {
    Header: "Baker",
    columns: [
      {
        Header: "Strikes",
        accessor: "baker_num_strikes",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Attempts",
        accessor: "baker_num_strikes_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Strikes %",
        accessor: "baker_strikes_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Strikes",
        accessor: "team_num_strikes",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Attempts",
        accessor: "team_num_strikes_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Strikes %",
        accessor: "team_strikes_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
      },
    ],
  },
  {
    Header: "Baker Match Play",
    columns: [
      {
        Header: "Strikes",
        accessor: "baker_mp_num_strikes",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Attempts",
        accessor: "baker_mp_num_strikes_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Strikes %",
        accessor: "baker_mp_strikes_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
      },
    ],
  },
  {
    Header: "All",
    columns: [
      {
        Header: "Strikes",
        accessor: "all_num_strikes",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Attempts",
        accessor: "all_num_strikes_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Strikes %",
        accessor: "all_strikes_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
      },
    ],
  },
];

export const summaryDoublesColumns = [
  { Header: "All", Cell: () => "All", expanded: true },
  {
    Header: "Bowler",
    accessor: "bowler",
  },
  {
    Header: "Baker",
    columns: [
      {
        Header: "Doubles",
        id: "baker_doubles",
      },
      {
        Header: "Attempts",
        id: "baker_attempts",
      },
      {
        Header: "%",
        id: "baker_percentage",
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Doubles",
        accessor: "team_doubles",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Attempts",
        accessor: "team_doubles_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "%",
        accessor: "team_double_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
      },
    ],
  },
  {
    Header: "Baker Match Play",
    columns: [
      {
        Header: "Doubles",
        id: "baker_mp_doubles",
      },
      {
        Header: "Attempts",
        id: "baker_mp_attempts",
      },
      {
        Header: "%",
        id: "baker_mp_percentage",
      },
    ],
  },
  {
    Header: "All",
    columns: [
      {
        Header: "Doubles",
        id: "all_doubles",
        accessor: "team_doubles",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "Attempts",
        id: "all_attempts",
        accessor: "team_doubles_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value.toFixed(0) : "-"),
      },
      {
        Header: "%",
        id: "all_doubles_percentage",
        accessor: "team_double_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
      },
    ],
  },
];

export const summaryFirstBallAveColumns = [
  { Header: "All", Cell: () => "All", expanded: true },
  {
    Header: "Bowler",
    accessor: "bowler",
  },
  {
    Header: "Baker",
    columns: [
      {
        Header: "Average",
        accessor: "baker_first_ball_ave",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Average",
        accessor: "team_first_ball_ave",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
      },
    ],
  },
  {
    Header: "Baker Match Play",
    columns: [
      {
        Header: "Average",
        accessor: "baker_mp_first_ball_ave",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
      },
    ],
  },
  {
    Header: "All",
    columns: [
      {
        Header: "Average",
        accessor: "all_first_ball_ave",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
      },
    ],
  },
];
