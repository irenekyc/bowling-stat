import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import {
  GAME_BAKER,
  GAME_TEAM,
  GAME_BAKER_MATCH_PLAY,
  VIEW_OVERALL,
  VIEW_BY_GAME,
  VIEW_BY_INDIVIDUAL,
  GAME_ALL,
  VIEW_BY_GAME_INDIVIDUAL,
  VIEW_BY_INDIVIDUAL_GAME,
} from "../../constants";

const Details = () => {
  const [gameType, setGameType] = useState(GAME_ALL);
  return (
    <>
      <div>
        <span>
          <strong>Group </strong>
        </span>
        <input
          type="radio"
          id="game-type-all"
          name="game-type"
          value="baker"
          onChange={() => setGameType(GAME_ALL)}
          checked={gameType === GAME_ALL}
        />
        <label for="game-type-all">All</label>
        <input
          type="radio"
          id="game-type-baker"
          name="game-type"
          value="baker"
          onChange={() => setGameType(GAME_BAKER)}
          checked={gameType === GAME_BAKER}
        />
        <label for="game-type-baker">Baker</label>
        <input
          type="radio"
          id="game-type-team"
          name="game-type"
          value="team"
          onChange={() => setGameType(GAME_TEAM)}
          checked={gameType === GAME_TEAM}
        />
        <label for="game-type-team">Team</label>
        <input
          type="radio"
          id="game-type-baker-match-play"
          name="game-type"
          value="baker-match-play"
          onChange={() => setGameType(GAME_BAKER_MATCH_PLAY)}
          checked={gameType === GAME_BAKER_MATCH_PLAY}
        />
        <label for="game-type-baker-match-play">Baker Match Player</label>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey={VIEW_OVERALL}>
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey={VIEW_OVERALL}>Overall</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={VIEW_BY_GAME}>By Game</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={VIEW_BY_INDIVIDUAL}>By Bowler</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={VIEW_BY_INDIVIDUAL_GAME}>
              By Bowler and Game
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={VIEW_BY_GAME_INDIVIDUAL}>
              By Game and Bowler
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey={VIEW_OVERALL}>
            <Data gameType={gameType} viewType={VIEW_OVERALL} />
          </Tab.Pane>
          <Tab.Pane eventKey={VIEW_BY_GAME}>
            <Data gameType={gameType} viewType={VIEW_BY_GAME} />
          </Tab.Pane>
          <Tab.Pane eventKey={VIEW_BY_INDIVIDUAL}>
            <Data gameType={gameType} viewType={VIEW_BY_INDIVIDUAL} />
          </Tab.Pane>
          <Tab.Pane eventKey={VIEW_BY_INDIVIDUAL_GAME}>
            <Data gameType={gameType} viewType={VIEW_BY_INDIVIDUAL_GAME} />
          </Tab.Pane>
          <Tab.Pane eventKey={VIEW_BY_GAME_INDIVIDUAL}>
            <Data gameType={gameType} viewType={VIEW_BY_GAME_INDIVIDUAL} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default Details;
