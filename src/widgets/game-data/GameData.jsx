import StatTable from "../../components/stat-table";
import { useSelector } from "react-redux";
import { bakerColumns } from "../../helpers/transformBakerData";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";

const GameData = () => {
  const {
    baker: bakerData,
    team: teamData,
    bakerMatch: bakerMatchPlayData,
  } = useSelector((state) => state.data.data);

  return (
    <div>
      <h2>Group by Game</h2>
      {bakerData.length > 0 && (
        <StatTable
          title="Baker"
          tableData={{ data: bakerData, columns: bakerColumns }}
          group="Game"
        />
      )}
      {teamData.length > 0 && (
        <StatTable
          title="Team"
          tableData={{
            data: teamData,
            columns: teamColumns,
          }}
          group="Game"
        />
      )}
      {bakerMatchPlayData.length > 0 && (
        <StatTable
          tableData={{
            data: bakerMatchPlayData,
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
