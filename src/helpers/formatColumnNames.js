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
    default:
      return name;
  }
};

export default formatColumnNames;
