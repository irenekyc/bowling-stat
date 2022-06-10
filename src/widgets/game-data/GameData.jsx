import {
  PAGE_BOWLER_ALL,
  PAGE_BOWLER_SINGLE,
  PAGE_EVENT_SINGLE,
  PAGE_EVENT_ALL,
} from "../../constants/page-view";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import StatGameTypeTable from "../../components/stat-game-type-table";

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
    Aggregated: () => `All`,
  },
  {
    Header: "First Ball Average",
    accessor: "first_ball_ave",
    aggregate: "average",
    Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
  },
  {
    Header: "Frame Average",
    accessor: "frame_average",
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : ""),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : ""),
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
    Aggregated: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
    Cell: ({ value }) => (value ? `${(value * 100).toFixed(1)}%` : "-"),
  },
  {
    Header: "Strikes/Game",
    accessor: "strikes_per_game",
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
  },
  {
    Header: "Spares",
    accessor: "num_spares",
    aggregate: "sum",
  },
  {
    Header: "Spares/Game",
    accessor: "spares_per_game",
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
  },
  {
    Header: "Opens",
    accessor: "num_opens",
    aggregate: "sum",
  },

  {
    Header: "Opens/Game",
    accessor: "opens_per_game",
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
  },
];

let teamColumns = [
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
    Aggregated: () => `All`,
    Cell: ({ value }) => {
      return <>{value}</>;
    },
  },
  {
    Header: "First Ball Average",
    accessor: "first_ball_ave",
    aggregate: "average",
    Cell: ({ value }) => (value ? value.toFixed(2) : "-"),
  },
  {
    Header: "Frame Average",
    accessor: "frame_average",
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
    Cell: ({ value }) => (value ? `${value.toFixed(2)}` : "-"),
  },
  {
    Header: "Strikes",
    accessor: "num_strikes",
    aggregate: "sum",
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
  {
    Header: "Doubles",
    accessor: "num_doubles",
    aggregate: "sum",
  },
  {
    Header: "Doubles Attempt",
    accessor: "num_double_attempts",
    aggregate: "sum",
  },
  {
    Header: "Doubles %",
    accessor: "double_percentage",
    aggregate: "average",
    Aggregated: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
    Cell: ({ value }) => (value ? `${(value * 100).toFixed(2)}%` : "-"),
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
    <div className="bd-stat__table">
      <div className="bd-stat__table__section">
        <h4 className="bd-stat__table__section__title">Baker</h4>
        {bakerGameStatColumns.length > 0 && (
          <StatGameTypeTable
            data={data.filter((entry) => entry.game_type === "Baker")}
            columns={bakerGameStatColumns}
          />
        )}
      </div>
      <div className="bd-stat__table__section">
        <h4 className="bd-stat__table__section__title">Team</h4>
        {teamGameStatColumns.length > 0 && (
          <StatGameTypeTable
            data={data.filter((entry) => entry.game_type === "Team")}
            columns={teamGameStatColumns}
          />
        )}
      </div>
      <div className="bd-stat__table__section">
        <h4 className="bd-stat__table__section__title">Baker Match Play</h4>

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
