import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { transformNameToSlug } from "../../helpers/convertSlugAndName";

import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../../layout/header";
import Page from "../../layout/page";
import Main from "../../layout/main";

const TeamHome = () => {
  const { teamId } = useParams();
  const { pathname } = useLocation();
  const { events, bowlers } = useSelector((state) => state.team);

  return (
    <Page>
      <Header level2={teamId} />
      <Main>
        <Container>
          <h3>Year 2021 - 2022</h3>
          <p>Go to</p>
          <div className="bd-team-home__dropdown-div">
            {events.length > 0 && (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Events Page
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {events.map((event) => (
                    <Dropdown.Item
                      key={event.id}
                      as={Link}
                      to={{
                        pathname: `${pathname}/events/${event.id}`,
                      }}
                    >
                      {event.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
          <div className="bd-team-home__dropdown-div">
            {bowlers.length > 0 && (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Bowler Page
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {["all", ...bowlers].map((bowlerName) => (
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
      </Main>
    </Page>
  );
};

export default TeamHome;
