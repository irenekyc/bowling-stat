import {
  BOWLER_TABLE_PAGE_EVENT_ALL,
  BOWLER_TABLE_PAGE_EVENT_SINGLE,
  BOWLER_TABLE_PAGE_BOWLER_ALL,
  BOWLER_TABLE_PAGE_BOWLER_SINGLE,
} from "../../constants/bowler-table";
import StatBowlerTable from "../../components/stat-bowler-table";
import transformEventIdToName from "../../helpers/transformEventIdtoName";

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
    Header: "Game Type",
    accessor: "game_type",
    Aggregated: () => `All`,
  },
  {
    Header: "Game Group",
    accessor: "game_group",
    Aggregated: () => `All`,
    Cell: ({ value, ...props }) => {
      return <>{value}</>;
    },
  },
  {
    Header: "First Ball Average",
    accessor: "first_ball_ave",
    aggregate: "average",
    Cell: ({ value }) => value.toFixed(2),
  },
  {
    Header: "Frame Average",
    accessor: "frame_average",
    aggregate: "average",
    Aggregated: ({ value }) => `${value.toFixed(2)}`,
    Cell: ({ value }) => `${value.toFixed(2)}`,
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
    Aggregated: ({ value }) => `${(value * 100).toFixed(1)}%`,
    Cell: ({ value }) => `${(value * 100).toFixed(1)}%`,
  },
  // {
  //   Header: "Strikes/Game",
  //   accessor: "strikes_per_game",
  //   aggregate: "average",
  // },
  {
    Header: "Spares",
    accessor: "num_spares",
    aggregate: "sum",
  },
  // {
  //   Header: "Spares/Game",
  //   accessor: "spare_per_game",
  //   aggregate: "average",
  //   Cell: ({ value }) => value.toFixed(2),
  // },
  {
    Header: "Opens",
    accessor: "num_opens",
    aggregate: "sum",
  },

  // {
  //   Header: "Opens/Game",
  //   accessor: "open_per_game",
  //   aggregate: "average",
  //   Cell: ({ value }) => value.toFixed(2),
  // },
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
  console.log(page);

  return (
    <div className="bd-stat__table">
      <div className="bd-stat__table__section">
        <h4 className="bd-stat__table__section__title">{renderTitle()}</h4>
        <StatBowlerTable page={page} data={data} columns={columns} />
      </div>
    </div>
  );
};

export default IndividualData;
