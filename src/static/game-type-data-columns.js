import sorting from "../helpers/sorting";
import transformEventIdToName from "../helpers/transformEventIdtoName";

export const bakerColumns = [
  { Header: "All", Cell: () => "All", expanded: true },
  {
    Header: "Event",
    accessor: "Event Id",
    Cell: ({ value }) => <strong>{transformEventIdToName(value)}</strong>,
    Aggregated: () => `All Events`,
  },
  {
    Header: "Bowler",
    accessor: "bowler",
    Cell: ({ value }) => (
      <strong style={{ whiteSpace: "nowrap" }}>{value}</strong>
    ),
  },
  {
    Header: "Game Group",
    accessor: "game_group",
    id: "game_group",
    sortable: true,
    Aggregated: () => `All`,
  },
  {
    Header: "First Ball Average",
    id: "first_ball_ave",
    accessor: (d) => Number(d.first_ball_ave),
    aggregate: "average",
    sortable: true,
    sortType: (a, b) => sorting("first_ball_ave", a, b),
    Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
  },
  {
    Header: "Frame Average",
    id: "frame_average",
    accessor: (d) => Number(d.frame_average),
    sortable: true,
    sortType: (a, b) => sorting("frame_average", a, b),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : ""),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : ""),
  },
  {
    Header: "Strikes",
    accessor: "num_strikes",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Strikes %",
    id: "strikes_percentage",
    accessor: (d) => Number(d.strikes_percentage),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
    Cell: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
    sortType: (a, b) => sorting("strikes_percentage", a, b),
    sortable: true,
  },
  {
    Header: "Strikes/Game",
    id: "strikes_per_game",
    accessor: (d) => Number(d.strikes_per_game),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    sortable: true,
    sortType: (a, b) => sorting("strikes_per_game", a, b),
  },
  {
    Header: "Spares",
    accessor: "num_spares",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Spares/Game",
    id: "spares_per_game",
    accessor: (d) => Number(d.spares_per_game),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    sortable: true,
    sortType: (a, b) => sorting("spares_per_game", a, b),
  },
  {
    Header: "Opens",
    accessor: "num_opens",
    aggregate: "sum",
    sortable: true,
  },

  {
    Header: "Opens/Game",
    id: "opens_per_game",
    accessor: (d) => Number(d.opens_per_game),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    sortable: true,
    sortType: (a, b) => sorting("opens_per_game", a, b),
  },
];

export const teamColumns = [
  { Header: "All", Cell: () => "All", expanded: true },
  {
    Header: "Event",
    accessor: "Event Id",
    Cell: ({ value }) => <strong>{transformEventIdToName(value)}</strong>,
    Aggregated: () => `All Events`,
  },
  {
    Header: "Bowler",
    accessor: "bowler",
    Cell: ({ value }) => (
      <strong style={{ whiteSpace: "nowrap" }}>{value}</strong>
    ),
  },
  {
    Header: "Game Group",
    id: "game_group",
    accessor: "game_group",
    Aggregated: () => `All`,
    sortable: true,
    Cell: ({ value }) => {
      return <>{value}</>;
    },
  },
  {
    Header: "First Ball Average",
    id: "first_ball_ave",
    accessor: (d) => Number(d.first_ball_ave),
    sortable: true,
    aggregate: "average",
    Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
    sortType: (a, b) => sorting("first_ball_ave", a, b),
  },
  {
    Header: "Frame Average",
    id: "frame_average",
    accessor: (d) => Number(d.frame_average),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    sortable: true,
    sortType: (a, b) => sorting("frame_average", a, b),
  },
  {
    Header: "Strikes",
    accessor: "num_strikes",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Spares",
    accessor: "num_spares",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Opens",
    accessor: "num_opens",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Doubles",
    accessor: "num_doubles",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Doubles Attempt",
    accessor: "num_double_attempts",
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Doubles %",
    id: "double_percentage",
    accessor: (d) => Number(d.double_percentage),
    sortable: true,
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
    Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
    sortType: (a, b) => sorting("double_percentage", a, b),
  },
];