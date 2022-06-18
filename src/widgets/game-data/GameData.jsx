import {
  PAGE_BOWLER_ALL,
  PAGE_BOWLER_SINGLE,
  PAGE_EVENT_SINGLE,
  PAGE_EVENT_ALL,
} from "../../constants/page-view";
import { bakerColumns, teamColumns } from "../../static/game-type-data-columns";
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
