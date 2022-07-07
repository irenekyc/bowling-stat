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
        id: "baker_num_frames",
        accessor: (d) => Number(d.baker_num_frames),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Frame Average",
        id: "baker_frame_ave",
        accessor: (d) => Number(d.baker_frame_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
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
        id: "team_num_frames",
        accessor: (d) => Number(d.team_num_frames),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Frame Average",
        id: "team_frame_ave",
        accessor: (d) => Number(d.team_frame_ave),
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
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
        id: "baker_mp_num_frames",
        accessor: (d) =>
          d.baker_mp_num_frames === "nan" ? 0 : Number(d.baker_mp_num_frames),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Frame Average",
        id: "baker_mp_frame_ave",
        accessor: (d) =>
          d.baker_mp_frame_ave === "nan" ? 0 : Number(d.baker_mp_frame_ave),
        sortType: (a, b) => sorting("baker_mp_frame_ave", a, b),
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
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
        id: "all_num_frames",
        accessor: (d) => Number(d.all_num_frames),
        aggregate: "sum",
      },
      {
        Header: "Frame Average",
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
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
        id: "baker_num_strikes",
        accessor: (d) => Number(d.baker_num_strikes),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        id: "baker_num_strikes_attempt",
        accessor: (d) => Number(d.baker_num_strikes_attempt),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Strikes %",
        id: "baker_strikes_percentage",
        accessor: (d) => Number(d.baker_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value.toFixed(2)}%` : "-"),
        sortable: true,
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Strikes",
        id: "team_num_strikes",
        accessor: (d) => Number(d.team_num_strikes),
        aggregate: "sum",
        sortable: true,
      },
      {
        Header: "Attempts",
        id: "team_num_strikes_attempt",
        accessor: (d) => Number(d.team_num_strikes_attempt),
        aggregate: "sum",
      },
      {
        Header: "Strikes %",
        id: "team_strikes_percentage",
        accessor: (d) => Number(d.team_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value.toFixed(2)}%` : "-"),
        sortable: true,
      },
    ],
  },
  {
    Header: "Baker Match Play",
    columns: [
      {
        Header: "Strikes",
        id: "baker_mp_num_strikes",
        accessor: (d) => Number(d.baker_mp_num_strikes),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        id: "baker_mp_num_strikes_attempt",
        accessor: (d) => Number(d.baker_mp_num_strikes_attempt),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Strikes %",
        id: "baker_mp_strikes_percentage",
        accessor: (d) => Number(d.baker_mp_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value.toFixed(2)}%` : "-"),
        sortable: true,
      },
    ],
  },
  {
    Header: "All",
    columns: [
      {
        Header: "Strikes",
        id: "all_num_strikes",
        accessor: (d) => Number(d.all_num_strikes),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        id: "all_num_strikes_attempt",
        accessor: (d) => Number(d.all_num_strikes),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "Strikes %",
        id: "all_strikes_percentage",
        accessor: (d) => Number(d.all_strikes_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value.toFixed(2)}%` : "-"),
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
        id: "team_doubles",
        accessor: (d) => Number(d.team_doubles),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
        sortable: true,
      },
      {
        Header: "Attempts",
        id: "team_doubles_attempt",
        accessor: (d) => Number(d.team_doubles_attempt),
        aggregate: "sum",
        Cell: ({ value }) => (value ? value : "-"),
      },
      {
        Header: "%",
        id: "team_double_percentage",
        accessor: (d) => Number(d.team_double_percentage * 100),
        aggregate: "average",
        Cell: ({ value }) => (value ? `${value.toFixed(2)}%` : "-"),
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
        id: "baker_first_ball_average",
        accessor: (d) => Number(d.baker_first_ball_average),
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
        aggregate: "average",
        sortable: true,
        sortType: (rowA, rowB) =>
          sorting("baker_first_ball_average", rowA, rowB),
      },
    ],
  },
  {
    Header: "Team",
    columns: [
      {
        Header: "Average",
        id: "team_first_ball_average",
        accessor: (d) => Number(d.team_first_ball_average),
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
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
        id: "baker_mp_first_ball_average",
        accessor: (d) => Number(d.baker_mp_first_ball_average),
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
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
        id: "all_first_ball_average",
        accessor: (d) => Number(d.all_first_ball_average),
        aggregate: "average",
        Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
        sortable: true,
        sortType: (rowA, rowB) => sorting("all_first_ball_ave", rowA, rowB),
      },
    ],
  },
];
