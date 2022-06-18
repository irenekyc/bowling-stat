import IndividualData from "../../widgets/individual-data";
import GameData from "../../widgets/game-data";
import SummaryData from "../../widgets/summary-data";

import { useEffect, useState } from "react";
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
import Page from "../../layout/page";
import Main from "../../layout/main";

const SUMMARY = "SUMMARY";
const INDIVIDUAL = "INDIVIDUAL";
const GAMETYPE = "GAMETYPE";

const EventDetails = () => {
  const [metaData, setMetaData] = useState(undefined);
  const { teamId, eventId } = useParams();
  const { statistic, summaryStatistic, events } = useSelector(
    (state) => state.team
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (statistic && statistic.length === 0 && teamId !== undefined) {
      dispatch(fetchTeamData(teamId));
    }
  }, [teamId, statistic, dispatch]);

  useEffect(() => {
    if (eventId === undefined || events.length === 0) return;
    setMetaData(events.filter((event) => event.id === eventId)[0]);
  }, [events, eventId]);

  return (
    <Page>
      {!metaData ? (
        <h2>404! Event not found</h2>
      ) : (
        <>
          <Header
            level2={teamId}
            level3={
              eventId.includes("all")
                ? "All Events (2021 - 2021)"
                : transformEventIdToName(eventId)
            }
          />
          <Main>
            <Container>
              <h2 data-testid="event-details-page-title">
                {transformEventIdToName(eventId)}
              </h2>
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
                  <Tab.Pane
                    eventKey={SUMMARY}
                    data-testid="event-data-table-summary"
                  >
                    <SummaryData
                      summaryStatistic={summaryStatistic.filter((stat) =>
                        !eventId.includes("all")
                          ? stat["Event Id"] === eventId
                          : stat
                      )}
                    />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey={INDIVIDUAL}
                    data-testid="event-data-table-by-bowler"
                  >
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
                  <Tab.Pane
                    eventKey={GAMETYPE}
                    data-testid="event-data-table-by-game-type"
                  >
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
          </Main>
        </>
      )}
    </Page>
  );
};

export default EventDetails;
