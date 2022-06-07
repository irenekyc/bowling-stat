import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bakerColumns } from "../../helpers/transformBakerData";
import StatTable from "../../components/stat-table";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";
import { useParams } from "react-router";

const IndividualData = () => {
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
      <h2>Group by Individual</h2>
      {bakerData.length > 0 && bakerColumns.length > 0 && (
        <StatTable
          tableData={{
            data: eventId
              ? bakerData.filter((data) => data["Event Id"] === eventId)
              : bakerData,
            columns: bakerColumns,
          }}
          group="Bowler"
          title="Baker"
        />
      )}
      {teamData.length > 0 && teamColumns.length > 0 && (
        <StatTable
          tableData={{
            data: eventId
              ? teamData.filter((data) => data["Event Id"] === eventId)
              : teamData,
            columns: teamColumns,
          }}
          group="Bowler"
          title="Team"
        />
      )}
      {bakerMatchPlayData.length > 0 && bakerMatchPlayColumns.length > 0 && (
        <StatTable
          tableData={{
            data: eventId
              ? bakerMatchPlayData.filter(
                  (data) => data["Event Id"] === eventId
                )
              : bakerMatchPlayData,
            columns: bakerMatchPlayColumns,
          }}
          group="Bowler"
          title="Baker Match Play"
        />
      )}
    </div>
  );
};

export default IndividualData;
