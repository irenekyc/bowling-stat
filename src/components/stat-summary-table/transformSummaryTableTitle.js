const {
  SUMMARY_DOUBLE,
  SUMMARY_FIRST_BALL_AVE,
  SUMMARY_SCORE,
  SUMMARY_STRIKES,
} = require("../../constants/summary");

const transformSummaryTableTitle = (title) => {
  switch (title) {
    case SUMMARY_DOUBLE:
      return "Doubles";
    case SUMMARY_FIRST_BALL_AVE:
      return "1st Ball Average";
    case SUMMARY_SCORE:
      return "Scores";
    case SUMMARY_STRIKES:
      return "Strikes";
    default:
      return "";
  }
};

export default transformSummaryTableTitle;
