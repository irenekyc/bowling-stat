import IndividualData from "../../widgets/individual-data";
import GameData from "../../widgets/game-data";
import { useEffect } from "react";
import { Tab, Nav, Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../../layout/header";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeamData } from "../../redux/team/actions";

import EventMetaData from "../../components/event-meta-data";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import {
  BOWLER_TABLE_PAGE_EVENT_SINGLE,
  BOWLER_TABLE_PAGE_EVENT_ALL,
} from "../../constants/bowler-table";
import { PAGE_EVENT_ALL, PAGE_EVENT_SINGLE } from "../../constants/page-view";
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
  const { teamId, eventId } = useParams();
  const { statistic } = useSelector((state) => state.team);
  const dispatch = useDispatch();

  useEffect(() => {
    if (statistic && statistic.length === 0 && teamId !== undefined) {
      dispatch(fetchTeamData(teamId));
    }
  }, [teamId, statistic, dispatch]);
  let metaData = staticEvents[eventId];
  if (eventId.includes("all")) {
    metaData = "All";
  }

  return (
    <>
      {!metaData ? (
        <h2>404! Event not found</h2>
      ) : (
        <>
          <Header level2={teamId} level3={eventId} />
          <Container>
            <h2>{transformEventIdToName(eventId)}</h2>
            <EventMetaData metaData={metaData} />
            <Tab.Container defaultActiveKey={SUMMARY}>
              <p>Breakdown:</p>
              <div className="bd-main__tabs-div">
                <Nav>
                  <Nav.Item>
                    <Nav.Link eventKey={SUMMARY}>Summary</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={INDIVIDUAL}>Bowler</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={GAMETYPE}>Game Type</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>

              <Tab.Content>
                {/* <Tab.Pane eventKey={SUMMARY}>
                  <SummaryData />
                </Tab.Pane> */}
                <Tab.Pane eventKey={INDIVIDUAL}>
                  <IndividualData
                    page={
                      !eventId.includes("all")
                        ? BOWLER_TABLE_PAGE_EVENT_SINGLE
                        : BOWLER_TABLE_PAGE_EVENT_ALL
                    }
                    data={statistic.filter((stat) =>
                      !eventId.includes("all")
                        ? stat["Event Id"] === eventId
                        : stat
                    )}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey={GAMETYPE}>
                  <GameData
                    page={
                      !eventId.includes("all")
                        ? PAGE_EVENT_SINGLE
                        : PAGE_EVENT_ALL
                    }
                    data={statistic.filter((stat) =>
                      !eventId.includes("all")
                        ? stat["Event Id"] === eventId
                        : stat
                    )}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </>
      )}
    </>
  );
};

export default EventDetails;
