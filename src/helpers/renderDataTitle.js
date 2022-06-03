const {
  GAME_ALL,
  GAME_TEAM,
  VIEW_BY_INDIVIDUAL,
  VIEW_BY_GAME,
  GAME_BAKER,
  VIEW_OVERALL,
} = require("../constants");

const renderDataTitle = ({ gameType, viewType }) => {
  let title = [];
  switch (gameType) {
    case GAME_BAKER:
      title.push("Baker");
      break;
    case GAME_ALL:
      title.push("All");
      break;
    case GAME_TEAM:
      title.push("Team");
      break;
    default:
      break;
  }
  switch (viewType) {
    case VIEW_OVERALL:
      title.push("All");
      break;
    case VIEW_BY_INDIVIDUAL:
      title.push("Bowler");
      break;
    case VIEW_BY_GAME:
      title.push("Game");
      break;
    default:
      break;
  }

  return title.join(" > ");
};

export default renderDataTitle;
