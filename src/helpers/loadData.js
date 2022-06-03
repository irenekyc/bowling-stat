import formatData from "./formatData";
import {
  GAME_BAKER,
  VIEW_OVERALL,
  VIEW_BY_GAME,
  VIEW_BY_INDIVIDUAL,
  VIEW_BY_GAME_INDIVIDUAL,
  VIEW_BY_INDIVIDUAL_GAME,
} from "../constants";
import bakerGameOverall from "../data/baker-overall.json";
import bakerGameByMatches from "../data/baker-matches.json";
import bakerGameByIndividual from "../data/baker-individual.json";
import bakerGameByMatchesAndMatch from "../data/baker-matches-individual-match-first.json";
import bakerGameByMatchesAndIndividual from "../data/baker-matches-individual-individual-first.json";

const loadData = ({ gameType, viewType }) => {
  let entries = [];
  switch (gameType && viewType) {
    case GAME_BAKER && VIEW_OVERALL:
      entries = bakerGameOverall;
      break;
    case GAME_BAKER && VIEW_BY_GAME:
      entries = bakerGameByMatches;
      break;
    case GAME_BAKER && VIEW_BY_INDIVIDUAL:
      entries = bakerGameByIndividual;
      break;
    case GAME_BAKER && VIEW_BY_GAME_INDIVIDUAL:
      entries = bakerGameByMatchesAndMatch;
      break;
    case GAME_BAKER && VIEW_BY_INDIVIDUAL_GAME:
      entries = bakerGameByMatchesAndIndividual;
      break;
    default:
      break;
  }

  return formatData(entries);
};

export default loadData;
