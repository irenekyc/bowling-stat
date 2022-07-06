import {
  BOWLER_TABLE_PAGE_EVENT_ALL,
  BOWLER_TABLE_PAGE_EVENT_SINGLE,
  BOWLER_TABLE_PAGE_BOWLER_ALL,
  BOWLER_TABLE_PAGE_BOWLER_SINGLE,
} from "../../constants/bowler-table";
import StatBowlerTable from "../../components/stat-bowler-table";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import sorting from "../../helpers/sorting";

// 3 combinations
// Individual Data - Event Details - ALL (page)
// ** Bowler > Event > Game Type > Game Group
// *** Until Game Group
// Individual Data - Event Details - SINGLE Event
// ** Bowler > Game Type > Game Group
// *** Until Game type
// Individual Data - Bowler Details - ALL
// ** Bowler > Event > Game Type > Game Group
// *** Until Game Group
// Individual Data - Bowler Details - Single Bowler
// ** Event > Game Type > Game Group
// *** Until Game Group

let bowlerTableColumns = [
  {
    Header: "Event",
    accessor: "event_id",
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
    Header: "Game Type",
    accessor: "game_type",
    Aggregated: () => `All`,
  },
  {
    Header: "Game Group",
    accessor: "game_group",
    Aggregated: () => `All`,
  },
  {
    Header: "First Ball Average",
    id: "first_ball_average",
    aggregate: "average",
    accessor: (d) => Number(d["first_ball_average"]),
    Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
    sortable: true,
    sortType: (a, b) => sorting("first_ball_average", a, b),
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
    id: "num_strikes",
    accessor: (d) => Number(d.num_strikes),
    sortType: (a, b) => sorting("num_strikes", a, b),
    sortable: true,
    aggregate: "sum",
  },
  {
    Header: "Strikes %",
    id: "strikes_percentage",
    sortable: true,
    accessor: (d) => Number(d.strikes_percentage),
    sortType: (a, b) => sorting("strikes_percentage", a, b),
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
    Cell: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
  },
  {
    Header: "Spares",
    id: "num_spares",
    accessor: (d) => Number(d.num_spares),
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Opens",
    id: "num_opens",
    accessor: (d) => Number(d.num_opens),
    aggregate: "sum",
    sortable: true,
  },
  {
    Header: "Fill Balls",
    columns: [
      {
        Header: "Attempt",
        id: "fill_balls",
        accessor: (d) => Number(d.fill_balls),
        aggregate: "sum",
        sortable: true,
      },
      {
        Header: "Strikes",
        id: "fill_ball_strikes",
        accessor: (d) => Number(d.fill_ball_strikes),
        aggregate: "sum",
        sortable: true,
      },
      {
        Header: "Strikes %",
        id: "fill_ball_strikes_percentage",
        Cell: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
        accessor: (d) => Number(d.fill_ball_strikes_percentage),
        sortType: (a, b) => sorting("fill_ball_strikes_percentage", a, b),
        aggregate: "average",
        sortable: true,
      },
    ],
  },
];

const IndividualData = ({ page = undefined, data = [], bowlerPage = "" }) => {
  if (!page) return null;
  let columns = [];

  switch (page) {
    case BOWLER_TABLE_PAGE_EVENT_ALL:
      columns = bowlerTableColumns;
      break;
    case BOWLER_TABLE_PAGE_EVENT_SINGLE:
      columns = bowlerTableColumns.filter(
        (column) => column.Header !== "Event"
      );
      break;
    case BOWLER_TABLE_PAGE_BOWLER_ALL:
      columns = bowlerTableColumns;
      break;
    case BOWLER_TABLE_PAGE_BOWLER_SINGLE:
      columns = bowlerTableColumns.filter(
        (column) => column.Header !== "Bowler"
      );
      break;
    default:
      break;
  }

  const renderTitle = () => {
    let bowlerName = "";
    switch (page) {
      case BOWLER_TABLE_PAGE_EVENT_ALL:
      case BOWLER_TABLE_PAGE_EVENT_SINGLE:
      case BOWLER_TABLE_PAGE_BOWLER_ALL:
        bowlerName = "Bowlers : All";
        break;
      case BOWLER_TABLE_PAGE_BOWLER_SINGLE:
        bowlerName = bowlerPage;
        break;
      default:
        break;
    }
    return bowlerName;
  };

  if (data.length === 0 || columns.length === 0) return null;

  return (
    <div className="bd-stat__table" data-testid="bowler-data-widget">
      <div className="bd-stat__table__section">
        <h4
          className="bd-stat__table__section__title"
          data-testid="bowler-data-widget-title"
        >
          {renderTitle()}
        </h4>
        <StatBowlerTable page={page} data={data} columns={columns} />
      </div>
    </div>
  );
};

export default IndividualData;
