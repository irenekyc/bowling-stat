import StatTable from "../../components/stat-table";

import transformGameGroupData from "../../helpers/transformGameGroupData";
import bakerMatchData from "../../data/baker-matches-individual-match-first.json";
const GameData = () => {
  return (
    <div>
      <h2>Game</h2>
      <StatTable
        title="Baker"
        tableData={transformGameGroupData(bakerMatchData)}
        group="Game"
      />
      <h3>Team</h3>
      <p>Coming soon</p>
      <h3>Team</h3>
      <p>Coming soon</p>
    </div>
  );
};

export default GameData;
