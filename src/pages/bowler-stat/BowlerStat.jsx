import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { transformBowlerSlugToName } from "../../helpers/formatBowlerName";
import { bakerColumns } from "../../helpers/transformBakerData";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";
import PageLayout from "../../layout/page-layout";
import StatTable from "../../components/stat-table";
import transformEventIdToName from "../../helpers/transformEventIdtoName";

const BowlerStat = () => {
  let { bowlerName: bowlerSlug } = useParams();
  const {
    baker: bakerData,
    team: teamData,
    bakerMatch: bakerMatchPlayData,
  } = useSelector((state) => state.data.data);
  const details = useSelector((state) => state.user.details);

  return (
    <PageLayout>
      <h2>{transformBowlerSlugToName(bowlerSlug)}</h2>
      <strong>Year 2021 - 2022 </strong>
      <p>View By Game Type</p>
      {bakerData.length > 0 && (
        <StatTable
          tableData={{
            data: bakerData.filter(
              (data) => data.Bowler === transformBowlerSlugToName(bowlerSlug)
            ),
            columns: bakerColumns,
          }}
          group="Bowler-Game"
          title="Baker"
        />
      )}
      {teamData.length > 0 && (
        <StatTable
          tableData={{
            data: teamData.filter(
              (data) => data.Bowler === transformBowlerSlugToName(bowlerSlug)
            ),
            columns: teamColumns,
          }}
          group="Bowler-Game"
          title="Team"
        />
      )}
      {bakerMatchPlayData.length > 0 && (
        <StatTable
          tableData={{
            data: bakerMatchPlayData.filter(
              (data) => data.Bowler === transformBowlerSlugToName(bowlerSlug)
            ),
            columns: bakerMatchPlayColumns,
          }}
          group="Bowler-Game"
          title="Baker Match Player"
        />
      )}
      <p>View By Event</p>
      {details &&
        details.events.map((eventId) => (
          <div key={`section-${eventId}`}>
            <h5>{transformEventIdToName(eventId)}</h5>
            {bakerData.length > 0 && (
              <StatTable
                title="Baker"
                tableData={{
                  data: bakerData.filter(
                    (entry) =>
                      entry.Bowler === transformBowlerSlugToName(bowlerSlug) &&
                      entry["Event Id"] === eventId
                  ),
                  columns: bakerColumns,
                }}
                group="Bowler-Event"
              />
            )}
            {teamData.length > 0 && (
              <StatTable
                title="Team"
                tableData={{
                  data: teamData.filter(
                    (entry) =>
                      entry.Bowler === transformBowlerSlugToName(bowlerSlug) &&
                      entry["Event Id"] === eventId
                  ),
                  columns: teamColumns,
                }}
                group="Bowler-Event"
              />
            )}
            {bakerMatchPlayData.length > 0 && (
              <StatTable
                title="Team"
                tableData={{
                  data: bakerMatchPlayData.filter(
                    (entry) =>
                      entry.Bowler === transformBowlerSlugToName(bowlerSlug) &&
                      entry["Event Id"] === eventId
                  ),
                  columns: bakerMatchPlayColumns,
                }}
                group="Bowler-Event"
              />
            )}
          </div>
        ))}
    </PageLayout>
  );
};

export default BowlerStat;
