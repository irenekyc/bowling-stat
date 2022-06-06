import SummaryData from "../../widgets/summary-data";
import IndividualData from "../../widgets/individual-data";
import GameData from "../../widgets/game-data";
import { Tab, Nav } from "react-bootstrap";

const SUMMARY = "SUMMARY";
const INDIVIDUAL = "INDIVIDUAL";
const GAMETYPE = "GAMETYPE";

const Home = () => {
  return (
    <Tab.Container defaultActiveKey={SUMMARY}>
      <p>Data By:</p>
      <div className="bd-main__tabs-div">
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey={SUMMARY}>Summary</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={INDIVIDUAL}>Individual</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={GAMETYPE}>Game No</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <Tab.Content>
        <Tab.Pane eventKey={SUMMARY}>
          <SummaryData />
        </Tab.Pane>
        <Tab.Pane eventKey={INDIVIDUAL}>
          <IndividualData />
        </Tab.Pane>
        <Tab.Pane eventKey={GAMETYPE}>
          <GameData />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Home;
