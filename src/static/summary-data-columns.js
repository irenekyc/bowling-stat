import sorting from "../helpers/sorting";

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
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Frame Average",
        id: "baker_frame_ave",
        accessor: (d) => Number(d.baker_frame_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortType: (a, b) => sorting("baker_frame_ave", a, b),
        sortable: true,
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
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Frame Average",
        id: "team_frame_ave",
        accessor: (d) => Number(d.team_frame_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortType: (a, b) => sorting("team_frame_ave", a, b),
        sortable: true,
      },
    ],
  },
  {
    Header: "Baker Match Play",
    sortable: false,
    columns: [
      {
        Header: "Frames",
        accessor: "baker_mp_num_frames",
        aggregate: "sum",
      },
      {
        Header: "Frame Average",
        id: "baker_mp_frame_ave",
        accessor: (d) => Number(d.baker_mp_frame_ave),
        sortType: (a, b) => sorting("baker_mp_frame_ave", a, b),
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
      },
    ],
  },
  {
    Header: "All",
    sortable: false,
    columns: [
      {
        Header: "Frames",
        accessor: "all_num_frames",
        aggregate: "sum",
      },
      {
        Header: "Frame Average",
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
        id: "all_frame_ave",
        accessor: (d) => Number(d.all_frame_ave),
        sortType: (a, b) => sorting("all_frame_ave", a, b),
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
        // Cell: ({ value }) => (value ? value: "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        accessor: "baker_num_strikes_attempt",
        aggregate: "sum",
        // Cell: ({ value }) => (value ? value: "-"),
      },
      {
        Header: "Strikes %",
        id: "baker_strikes_percentage",
        accessor: (d) => Number(d.baker_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value}%` : "-"),
        sortable: true,
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
        sortable: true,
      },
      {
        Header: "Attempts",
        accessor: "team_num_strikes_attempt",
        aggregate: "sum",
      },
      {
        Header: "Strikes %",
        id: "team_strikes_percentage",
        accessor: (d) => Number(d.team_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value}%` : "-"),
        sortable: true,
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
        // Cell: ({ value }) => (value ? value: "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        accessor: "baker_mp_num_strikes_attempt",
        aggregate: "sum",
        // Cell: ({ value }) => (value ? value: "-"),
      },
      {
        Header: "Strikes %",
        id: "baker_mp_strikes_percentage",
        accessor: (d) => Number(d.baker_mp_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value}%` : "-"),
        sortable: true,
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
        // Cell: ({ value }) => (value ? value: "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        accessor: "all_num_strikes_attempt",
        aggregate: "sum",
        // Cell: ({ value }) => (value ? value: "-"),
      },
      {
        Header: "Strikes %",
        id: "all_strikes_percentage",
        accessor: (d) => Number(d.all_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value}%` : "-"),
        sortable: true,
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
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        accessor: "team_doubles_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "%",
        id: "team_double_percentage",
        accessor: (d) => Number(d.team_double_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value}%` : "-"),
        sortable: true,
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
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Attempts",
        id: "all_attempts",
        accessor: "team_doubles_attempt",
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "%",
        id: "all_doubles_percentage",
        accessor: "team_double_percentage",
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value * 100}%` : "-"),
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
        id: "baker_first_ball_ave",
        accessor: (d) => Number(d.baker_first_ball_ave),
        Cell: ({ value }) => (value ? value : "-"),
        aggregate: "average",
        sortable: true,
        sortType: (rowA, rowB) => sorting("baker_first_ball_ave", rowA, rowB),
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Average",
        id: "team_first_ball_ave",
        accessor: (d) => Number(d.team_first_ball_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
        sortType: (rowA, rowB) => sorting("team_first_ball_ave", rowA, rowB),
      },
    ],
  },
  {
    Header: "Baker Match Play",
    columns: [
      {
        Header: "Average",
        id: "baker_mp_first_ball_ave",
        accessor: (d) => Number(d.baker_mp_first_ball_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
        sortType: (rowA, rowB) =>
          sorting("baker_mp_first_ball_ave", rowA, rowB),
      },
    ],
  },
  {
    Header: "All",
    columns: [
      {
        Header: "Average",
        id: "all_first_ball_ave",
        accessor: (d) => Number(d.all_first_ball_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
        sortType: (rowA, rowB) => sorting("all_first_ball_ave", rowA, rowB),
      },
    ],
  },
];
