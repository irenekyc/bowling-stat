import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { transformSlugToName } from "../../helpers/convertSlugAndName";
import IndividualData from "../../widgets/individual-data";
import Header from "../../layout/header";
import { Tab, Nav, Container } from "react-bootstrap";
import {
  BOWLER_TABLE_PAGE_BOWLER_SINGLE,
  BOWLER_TABLE_PAGE_BOWLER_ALL,
} from "../../constants/bowler-table";
import { PAGE_BOWLER_ALL, PAGE_BOWLER_SINGLE } from "../../constants/page-view";
import { useEffect } from "react";
import { fetchTeamData } from "../../redux/team/actions";
import GameData from "../../widgets/game-data";

const EVENT = "EVENT";
const GAMETYPE = "GAMETYPE";

const BowlerStat = () => {
  const dispatch = useDispatch();
  let { bowlerSlug, teamId } = useParams();
  // const {
  //   baker: bakerData,
  //   team: teamData,
  //   bakerMatch: bakerMatchPlayData,
  // } = useSelector((state) => state.data.data);
  const { statistic } = useSelector((state) => state.team);
  useEffect(() => {
    if (statistic && statistic.length === 0 && teamId !== undefined) {
      dispatch(fetchTeamData(teamId));
    }
  }, [teamId, statistic, dispatch]);

  return (
    <>
      <Header level2={teamId} level3={bowlerSlug} />
      <Container>
        <h2>{transformSlugToName(bowlerSlug, "bowler")}</h2>
        <strong>Year 2021 - 2022 </strong>
        <Tab.Container defaultActiveKey={EVENT}>
          <p>Breakdown:</p>
          <div className="bd-main__tabs-div">
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey={EVENT}>Event</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={GAMETYPE}>Game Type</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey={EVENT}>
              <IndividualData
                page={
                  !bowlerSlug.includes("all")
                    ? BOWLER_TABLE_PAGE_BOWLER_SINGLE
                    : BOWLER_TABLE_PAGE_BOWLER_ALL
                }
                data={statistic.filter((stat) =>
                  !bowlerSlug.includes("all")
                    ? stat["bowler"] ===
                      transformSlugToName(bowlerSlug, "bowler")
                    : stat
                )}
              />
            </Tab.Pane>
            <Tab.Pane eventKey={GAMETYPE}>
              <GameData
                page={
                  !bowlerSlug.includes("all")
                    ? PAGE_BOWLER_SINGLE
                    : PAGE_BOWLER_ALL
                }
                data={statistic.filter((stat) =>
                  !bowlerSlug.includes("all")
                    ? stat["bowler"] ===
                      transformSlugToName(bowlerSlug, "bowler")
                    : stat
                )}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  );
};

export default BowlerStat;
