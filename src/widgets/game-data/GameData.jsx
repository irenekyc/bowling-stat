import { useEffect, useState } from "react";

import StatTable from "../../components/stat-table";
import { useSelector } from "react-redux";
import { bakerColumns } from "../../helpers/transformBakerData";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";
import { useParams } from "react-router";

const GameData = () => {
  const [eventId, setEventId] = useState(undefined);
  const {
    baker: bakerData,
    team: teamData,
    bakerMatch: bakerMatchPlayData,
  } = useSelector((state) => state.data.data);

  const query = useParams();

  useEffect(() => {
    if (!query) return;
    if (query && query.eventId) {
      setEventId(query.eventId);
    }
  }, [query]);

  return (
    <div>
      <h2>Group by Game</h2>
      {bakerData.length > 0 && (
        <StatTable
          title="Baker"
          tableData={{
            data: eventId
              ? bakerData.filter((data) => data["Event Id"] === eventId)
              : bakerData,
            columns: bakerColumns,
          }}
          group="Game"
        />
      )}
      {teamData.length > 0 && (
        <StatTable
          title="Team"
          tableData={{
            data: eventId
              ? teamData.filter((data) => data["Event Id"] === eventId)
              : teamData,
            columns: teamColumns,
          }}
          group="Game"
        />
      )}
      {bakerMatchPlayData.length > 0 && (
        <StatTable
          tableData={{
            data: eventId
              ? bakerMatchPlayData.filter(
                  (data) => data["Event Id"] === eventId
                )
              : bakerMatchPlayData,
            columns: bakerMatchPlayColumns,
          }}
          group="Game"
          title="Baker Match Play"
        />
      )}
    </div>
  );
};

export default GameData;
