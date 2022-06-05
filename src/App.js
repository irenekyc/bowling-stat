import "./app.scss";
import { Tab, Nav } from "react-bootstrap";
import metaData from "./data/meta-data.json";
import MetaData from "./components/meta-data";

import { Container } from "react-bootstrap";

import SummaryData from "./widgets/summary-data";
import IndividualData from "./widgets/individual-data";

const SUMMARY = "SUMMARY";
const INDIVIDUAL = "INDIVIDUAL";
const GAMETYPE = "GAMETYPE";

function App() {
  // const [ view, setCurrentView] = useState(SUMMARY)
  return (
    <div className="bd-main">
      <Container>
        <MetaData metaData={metaData} />
        <Tab.Container defaultActiveKey={SUMMARY}>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey={SUMMARY}>Summary</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={INDIVIDUAL}>By Individual</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={GAMETYPE}>By Game Type</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey={SUMMARY}>
              <SummaryData />
            </Tab.Pane>
            <Tab.Pane eventKey={INDIVIDUAL}>
              <IndividualData />
            </Tab.Pane>
            <Tab.Pane eventKey={GAMETYPE}>
              <h3>Coming Soon</h3>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;
