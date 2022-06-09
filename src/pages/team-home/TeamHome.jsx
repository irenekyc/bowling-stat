import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import { transformNameToSlug } from "../../helpers/convertSlugAndName";

import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../layout/header";

const TeamHome = () => {
  const { teamId } = useParams();
  const { pathname } = useLocation();
  const { events, bowlers } = useSelector((state) => state.team);

  // useEffect(() => {
  //   if (!teamId) return;
  //   if (!team || teamId !== team) {
  //     dispatch(fetchTeamData(teamId));
  //   }
  // }, [dispatch, teamId, team]);

  return (
    <>
      <Header level2={teamId} />
      <Container>
        <h3>Year 2021 - 2022</h3>
        <p>Go to</p>
        <div>
          {events.length > 0 && (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Events Page
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {["all--2021-2022", ...events].map((eventId) => (
                  <Dropdown.Item
                    key={eventId}
                    as={Link}
                    to={{
                      pathname: `${pathname}/events/${eventId}`,
                    }}
                  >
                    {transformEventIdToName(eventId)}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          {bowlers.length > 0 && (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Bowler Page
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {bowlers.map((bowlerName) => (
                  <Dropdown.Item
                    key={bowlerName}
                    as={Link}
                    to={{
                      pathname: `${pathname}/bowlers/${transformNameToSlug(
                        bowlerName
                      )}`,
                    }}
                  >
                    {bowlerName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}{" "}
        </div>
      </Container>
    </>
  );
};

export default TeamHome;
