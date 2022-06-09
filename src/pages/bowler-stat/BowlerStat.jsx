import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { transformSlugToName } from "../../helpers/convertSlugAndName";
import { bakerColumns } from "../../helpers/transformBakerData";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";
import StatTable from "../../components/stat-table";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import Header from "../../layout/header";
import { Container } from "react-bootstrap";

const BowlerStat = () => {
  let { bowlerSlug, teamId } = useParams();
  // const {
  //   baker: bakerData,
  //   team: teamData,
  //   bakerMatch: bakerMatchPlayData,
  // } = useSelector((state) => state.data.data);
  // const details = useSelector((state) => state.user.details);

  return (
    <>
      <Header level2={teamId} level3={bowlerSlug} />
      <Container>
        <h2>{transformSlugToName(bowlerSlug, "bowler")}</h2>
        <strong>Year 2021 - 2022 </strong>
        <p>View By Game Type</p>
        {/* {bakerData.length > 0 && (
        <StatTable
          tableData={{
            data: bakerData.filter(
              (data) => data.Bowler === transformSlugToName(bowlerSlug)
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
              (data) => data.Bowler === transformSlugToName(bowlerSlug)
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
              (data) => data.Bowler === transformSlugToName(bowlerSlug)
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
                      entry.Bowler === transformSlugToName(bowlerSlug) &&
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
                      entry.Bowler === transformSlugToName(bowlerSlug) &&
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
                      entry.Bowler === transformSlugToName(bowlerSlug) &&
                      entry["Event Id"] === eventId
                  ),
                  columns: bakerMatchPlayColumns,
                }}
                group="Bowler-Event"
              />
            )}
          </div>
        ))} */}
      </Container>
    </>
  );
};

export default BowlerStat;
