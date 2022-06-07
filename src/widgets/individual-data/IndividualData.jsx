import { useSelector } from "react-redux";
import { bakerColumns } from "../../helpers/transformBakerData";
import StatTable from "../../components/stat-table";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";

const IndividualData = () => {
  const {
    baker: bakerData,
    team: teamData,
    bakerMatch: bakerMatchPlayData,
  } = useSelector((state) => state.data.data);

  return (
    <div>
      <h2>Group by Individual</h2>
      {bakerData.length > 0 && bakerColumns.length > 0 && (
        <StatTable
          tableData={{
            data: bakerData,
            columns: bakerColumns,
          }}
          group="Bowler"
          title="Baker"
        />
      )}
      {teamData.length > 0 && teamColumns.length > 0 && (
        <StatTable
          tableData={{
            data: teamData,
            columns: teamColumns,
          }}
          group="Bowler"
          title="Team"
        />
      )}
      {bakerMatchPlayData.length > 0 && bakerMatchPlayColumns.length > 0 && (
        <StatTable
          tableData={{
            data: bakerMatchPlayData,
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
