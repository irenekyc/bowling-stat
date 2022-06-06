import StatTable from "../../components/stat-table";

import transformGameGroupData from "../../helpers/transformGameGroupData";
import bakerMatchData from "../../data/baker-matches-individual-match-first.json";
import transformTeamData from "../../helpers/transformTeamData";
import teamData from "../../data/team.json";
const GameData = () => {
  return (
    <div>
      <h2>Game</h2>
      <StatTable
        title="Baker"
        tableData={transformGameGroupData(bakerMatchData)}
        group="Game"
      />
      <StatTable
        title="Team"
        tableData={transformTeamData(teamData)}
        group="Game"
      />
      <h3>Baker Match Play</h3>
      <p>Coming soon</p>
    </div>
  );
};

export default GameData;
