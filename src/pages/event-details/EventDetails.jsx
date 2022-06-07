import SummaryData from "../../widgets/summary-data";
import IndividualData from "../../widgets/individual-data";
import GameData from "../../widgets/game-data";
import { Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router";

import EventMetaData from "../../components/event-meta-data";
import PageLayout from "../../layout/page-layout";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
const SUMMARY = "SUMMARY";
const INDIVIDUAL = "INDIVIDUAL";
const GAMETYPE = "GAMETYPE";

const staticEvents = {
  "big-red-invite--2021-2022": {
    location: "Hollywood Bowl",
    start_date: "2022-2-25",
    end_date: "2022-2-27",
  },
  "flyer-classic--2021-2022": {
    location: "Strike And Spare II",
    start_date: "2022-2-11",
    end_date: "2022-2-13",
  },
  "peacocks-classic--2021-2022": {
    location: "Cadillac XBC",
    start_date: "2022-1-21",
    end_date: "2022-1-23",
  },
};

const EventDetails = () => {
  const { eventId } = useParams();
  const metaData = staticEvents[eventId];

  return (
    <PageLayout>
      {!metaData ? (
        <h2>404! Event not found</h2>
      ) : (
        <>
          <h2>{transformEventIdToName(eventId)}</h2>
          <EventMetaData metaData={metaData} />
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
        </>
      )}
    </PageLayout>
  );
};

export default EventDetails;
