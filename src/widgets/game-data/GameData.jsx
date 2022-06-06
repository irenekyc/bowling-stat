import StatTable from "../../components/stat-table";

import transformGameGroupData from "../../helpers/transformGameGroupData";
import bakerMatchData from "../../data/baker-matches-individual-match-first.json";
import transformTeamData from "../../helpers/transformTeamData";
import teamData from "../../data/team.json";
import transformBakerMatchPlayData from "../../helpers/transformBakerMatchPlayData";
import bakerMatchPlayData from "../../data/baker-match-play.json";

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
      <StatTable
        tableData={transformBakerMatchPlayData(bakerMatchPlayData)}
        group="Game"
        title="Baker Match Play"
      />
    </div>
  );
};

export default GameData;
