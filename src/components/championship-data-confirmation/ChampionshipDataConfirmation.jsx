import React from "react";

const ChampionshipDataConfirmation = ({ formData }) => {
  const { num_of_championship_matches } = formData;

  if (num_of_championship_matches === 0) return null;

  const renderData = () => {
    let el = [];
    for (let i = 1; i <= num_of_championship_matches; i++) {
      const matchNo = i;
      el.push(
        <div
          data-testid={"championship-data-match-data"}
          key={`championship-data-match-data-${matchNo}`}
        >
          <li>Match # {matchNo}</li>
          <li>
            Number of Traditional Team Game:{" "}
            {formData[`champ_${matchNo}_team_games`]}
          </li>
          <li>
            Number of Baker Blocks: {formData[`champ_${matchNo}_baker_games`]}
          </li>
          <li>
            Number of Baker Match Play:{" "}
            {formData[`champ_${matchNo}_baker_mp_games`]}
          </li>
        </div>
      );
    }
    return el;
  };

  return <div data-testid="championship-data-confirmation">{renderData()}</div>;
};

export default ChampionshipDataConfirmation;
