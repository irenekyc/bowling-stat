import {
  PAGE_BOWLER_ALL,
  PAGE_BOWLER_SINGLE,
  PAGE_EVENT_SINGLE,
  PAGE_EVENT_ALL,
} from "../../constants/page-view";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import StatGameTypeTable from "../../components/stat-game-type-table";
import sorting from "../../helpers/sorting";

/*Game Type Data - consists 3 tables
 1. Baker / 3. Baker Match Play
  Page views 
    A. Event Details - ALL
        ** Event > Game Group
        *** Until Game Group
    B. Event Details - SINGLE Event
        ** Game Group
        *** Until Game Group
    C. Bowler Details - ALL
        ** Bowler > Event > Game Group
        *** Until Game Group
    D. Bowler Details - Single Bowler
        ** Event > Game Group
        *** Until Game Group
 2. Team
   Page views 
    A. Event Details - ALL
        ** Event > Game Group 
        *** Until
    B. Event Details - SINGLE Event
        ** Game Group 
        *** Until Game Group
    C. Bowler Details - ALL
        ** Bowler > Event > Game Group
        *** Until Game Group
    D. Bowler Details - Single Bowler
        ** Event > Game Group
        *** Until Game Group


*/

const bakerColumns = [
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

let teamColumns = [
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

const GameData = ({ page, data = [] }) => {
  if (!page || data.length === 0) return <></>;
  let bakerGameStatColumns = [];
  let teamGameStatColumns = [];

  switch (page) {
    case PAGE_BOWLER_ALL:
      bakerGameStatColumns = bakerColumns;
      teamGameStatColumns = teamColumns;
      break;
    case PAGE_BOWLER_SINGLE:
      bakerGameStatColumns = bakerColumns.filter(
        (column) => column.Header !== "Bowler"
      );
      teamGameStatColumns = teamColumns.filter(
        (column) => column.Header !== "Bowler"
      );
      break;
    case PAGE_EVENT_ALL:
      bakerGameStatColumns = bakerColumns.filter(
        (column) => column.Header !== "Bowler" && column.Header !== "Event"
      );
      teamGameStatColumns = teamColumns.filter(
        (column) => column.Header !== "Bowler" && column.Header !== "Event"
      );
      break;
    case PAGE_EVENT_SINGLE:
      bakerGameStatColumns = bakerColumns.filter(
        (column) => column.Header !== "Bowler" && column.Header !== "Event"
      );
      teamGameStatColumns = teamColumns.filter(
        (column) => column.Header !== "Bowler" && column.Header !== "Event"
      );
      break;
    default:
      break;
  }

  return (
    <div className="bd-stat__table" data-testid="game-data-widget">
      <div
        className="bd-stat__table__section"
        data-testid="game-data-widget-section"
      >
        <h4
          className="bd-stat__table__section__title"
          data-testid="game-data-widget-section-title"
        >
          Baker
        </h4>
        {bakerGameStatColumns.length > 0 && (
          <StatGameTypeTable
            data={data.filter((entry) => entry.game_type === "Baker")}
            columns={bakerGameStatColumns}
          />
        )}
      </div>
      <div
        className="bd-stat__table__section"
        data-testid="game-data-widget-section"
      >
        <h4
          className="bd-stat__table__section__title"
          data-testid="game-data-widget-section-title"
        >
          Team
        </h4>
        {teamGameStatColumns.length > 0 && (
          <StatGameTypeTable
            data={data.filter((entry) => entry.game_type === "Team")}
            columns={teamGameStatColumns}
          />
        )}
      </div>
      <div
        className="bd-stat__table__section"
        data-testid="game-data-widget-section"
      >
        <h4
          className="bd-stat__table__section__title"
          data-testid="game-data-widget-section-title"
        >
          Baker Match Play
        </h4>

        {bakerGameStatColumns.length > 0 && (
          <StatGameTypeTable
            data={data.filter(
              (entry) => entry.game_type === "Baker Match Play"
            )}
            columns={bakerGameStatColumns}
          />
        )}
      </div>
    </div>
  );
};

export default GameData;
