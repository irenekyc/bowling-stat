import transformIndividualData from "../../helpers/transformIndividualData";

import bakerIndiviualGameData from "../../data/baker-matches-individual-individual-first.json";
import StatTable from "../../components/stat-table";

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
      <p>Coming Soon</p>
      <h3>Baker Match play</h3>
      <p>Coming Soon</p>
    </div>
  );
};

export default IndividualData;
