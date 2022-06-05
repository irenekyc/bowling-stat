const formatColumnNames = (name) => {
  switch (name) {
    case "first_ball_ave":
      return "First Ball Average";
    case "strikes":
    case "num_strikes":
      return "Number of Strikes";
    case "spares":
    case "num_spares":
      return "Number of Spares";
    case "strikes_percentage":
      return "Stikes %";
    case "num_baker_game":
      return "Baker Game";
    case "num_team_game":
      return "Team Game";
    case "num_baker_match_play":
      return "Baker Match Play Game";
    default:
      return name;
  }
};

export default formatColumnNames;
