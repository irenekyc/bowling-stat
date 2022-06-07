const getAllBowlers = (data) => {
  let bowlers = [];
  data.forEach((entry) => {
    if (!bowlers.includes(entry.Bowler)) {
      bowlers.push(entry.Bowler);
    }
  });

  return bowlers;
};

export default getAllBowlers;
