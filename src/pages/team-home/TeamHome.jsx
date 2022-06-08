import PageLayout from "../../layout/page-layout";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import transformEventIdToName from "../../helpers/transformEventIdtoName";
import { transformNameToSlug } from "../../helpers/convertSlugAndName";

const TeamHome = () => {
  const { events, bowlers } = useSelector((state) => state.team);
  return (
    <PageLayout>
      <>
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
                  <Dropdown.Item key={eventId} href={`/events/${eventId}`}>
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
                    key={eventId}
                    href={`/bowlers/${transformNameToSlug(bowlerName)}`}
                  >
                    {bowlerName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </>
    </PageLayout>
  );
};

export default TeamHome;
