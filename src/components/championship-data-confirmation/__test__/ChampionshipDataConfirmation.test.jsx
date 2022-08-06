import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChampionshipDataConfirmation from "../index";

const mockDataOne = {
  champ_1_team_games: 1,
  champ_1_baker_games: 1,
  champ_1_baker_mp_games: 7,
  champ_2_team_games: 1,
  champ_2_baker_games: 1,
  champ_2_baker_mp_games: 5,
  champ_3_team_games: 1,
  champ_3_baker_games: 1,
  champ_3_baker_mp_games: 4,
  num_of_championship_matches: 3,
};

const mockDataTwo = {
  champ_1_team_games: 5,
  champ_1_baker_games: 1,
  champ_1_baker_mp_games: 0,
  champ_2_team_games: 0,
  champ_2_baker_games: 0,
  champ_2_baker_mp_games: 0,
  champ_3_team_games: 0,
  champ_3_baker_games: 0,
  champ_3_baker_mp_games: 0,
  num_of_championship_matches: 1,
};

const mockDataThree = {
  champ_1_team_games: 5,
  champ_1_baker_games: 1,
  champ_1_baker_mp_games: 0,
  champ_2_team_games: 0,
  champ_2_baker_games: 0,
  champ_2_baker_mp_games: 0,
  champ_3_team_games: 0,
  champ_3_baker_games: 0,
  champ_3_baker_mp_games: 0,
  num_of_championship_matches: 0,
};

describe("Baker Championship Data Confirmation", () => {
  it("Render correct data - when there are three matches", () => {
    render(<ChampionshipDataConfirmation formData={mockDataOne} />);
    const container = screen.queryByTestId("championship-data-confirmation");
    expect(container).toBeInTheDocument();
    const gameList = screen.getAllByTestId("championship-data-match-data");
    expect(gameList).toHaveLength(3);
    expect(gameList[0]).toHaveTextContent("Number of Traditional Team Game: 1");
  });

  it("Render correct data - when there is one match", () => {
    render(<ChampionshipDataConfirmation formData={mockDataTwo} />);

    const container = screen.queryByTestId("championship-data-confirmation");
    expect(container).toBeInTheDocument();
    const gameList = screen.getAllByTestId("championship-data-match-data");
    expect(gameList).toHaveLength(1);
    expect(gameList[0]).toHaveTextContent("Number of Traditional Team Game: 5");
  });

  it("Render correct data - no match", () => {
    render(<ChampionshipDataConfirmation formData={mockDataThree} />);
    const container = screen.queryByTestId(
      "baker-match-play-ditribution-display"
    );
    expect(container).toBeNull();
  });
});
