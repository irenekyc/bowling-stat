import transformIndividualData from "../../helpers/transformIndividualData";

import bakerIndiviualGameData from "../../data/baker-matches-individual-individual-first.json";
import StatTable from "../../components/stat-table";
import teamData from "../../data/team.json";
import bakerMatchPlayData from "../../data/baker-match-play.json";
import transformTeamData from "../../helpers/transformTeamData";
import transformBakerMatchPlayData from "../../helpers/transformBakerMatchPlayData";

const IndividualData = () => {
  return (
    <div>
      <h2>Individual Data</h2>
      <StatTable
        tableData={transformIndividualData(bakerIndiviualGameData)}
        group="Bowler"
        title="Baker"
      />
      <h3>Team Game</h3>
      <StatTable
        tableData={transformTeamData(teamData)}
        group="Bowler"
        title="Team"
      />
      <h3>Baker Match play</h3>
      <StatTable
        tableData={transformBakerMatchPlayData(bakerMatchPlayData)}
        group="Bowler"
        title="Baker Match Play"
      />
    </div>
  );
};

export default IndividualData;
