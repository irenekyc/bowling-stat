import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BakerMatchPlayDistribution from "../index";

const mockDataOne = {
  baker_match_play_1: 7,
  baker_match_play_2: 4,
  baker_match_play_3: 5,
};

const mockDataTwo = {
  baker_match_play_1: 7,
  baker_match_play_2: 0,
  baker_match_play_3: 0,
};

const mockDataThree = {
  baker_match_play_1: 0,
  baker_match_play_2: 0,
  baker_match_play_3: 0,
};

describe("Baker Match Play Distribution", () => {
  it("Render correct data - when there are three baker match play games", () => {
    render(<BakerMatchPlayDistribution formData={mockDataOne} />);
    const container = screen.queryByTestId(
      "baker-match-play-ditribution-display"
    );
    expect(container).toBeInTheDocument();
    const gameList = screen.getAllByTestId("baker-match-play-ditribution-game");
    expect(gameList).toHaveLength(3);
    expect(gameList[0]).toHaveTextContent("Baker Match Play 1 : 7 games");
  });

  it("Render correct data - when there is baker match play - only one baker match play game", () => {
    render(<BakerMatchPlayDistribution formData={mockDataTwo} />);
    const container = screen.queryByTestId(
      "baker-match-play-ditribution-display"
    );
    expect(container).toBeInTheDocument();
    const gameList = screen.getAllByTestId("baker-match-play-ditribution-game");
    expect(gameList).toHaveLength(1);
    expect(gameList[0]).toHaveTextContent("Baker Match Play 1 : 7 games");
  });

  it("Render correct data - no baker game", () => {
    render(<BakerMatchPlayDistribution formData={mockDataThree} />);
    const container = screen.queryByTestId(
      "baker-match-play-ditribution-display"
    );
    expect(container).toBeInTheDocument();
    const gameList = screen.queryAllByTestId(
      "baker-match-play-ditribution-game"
    );
    expect(gameList).toHaveLength(0);
    const noGameText = screen.getByTestId(
      "baker-match-play-ditribution-no-game"
    );
    expect(noGameText).toBeInTheDocument();
    expect(noGameText).toHaveTextContent("There is no baker match play");
  });
});
