import React from "react";

const BakerMatchPlayDistribution = ({ formData }) => {
  const {
    baker_match_play_1,
    baker_match_play_2,
    baker_match_play_3,
  } = formData;
  const distribution = [
    baker_match_play_1,
    baker_match_play_2,
    baker_match_play_3,
  ];
  const num_baker_match_play = distribution.filter((n) => n > 0).length;
  return (
    <div data-testid="baker-match-play-ditribution-display">
      {num_baker_match_play > 0 ? (
        <>
          <li>There are {num_baker_match_play} baker match play games</li>
          {distribution
            .filter((n) => n > 0)
            .map((n, index) => (
              <li
                key={`baker-match-play-${index}`}
                data-testid="baker-match-play-ditribution-game"
              >
                Baker Match Play {index + 1} : {n} games
              </li>
            ))}
        </>
      ) : (
        <li data-testid="baker-match-play-ditribution-no-game">
          There is no baker match play
        </li>
      )}
    </div>
  );
};

export default BakerMatchPlayDistribution;
