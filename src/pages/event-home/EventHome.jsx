import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

import PageLayout from "../../layout/page-layout";
import StatTable from "../../components/stat-table";
import { bakerColumns } from "../../helpers/transformBakerData";
import { teamColumns } from "../../helpers/transformTeamData";
import { bakerMatchPlayColumns } from "../../helpers/transformBakerMatchPlayData";
import transformEventIdToName from "../../helpers/transformEventIdtoName";

const EventHome = () => {
  const {
    baker: bakerData,
    team: teamData,
    bakerMatch: bakerMatchData,
  } = useSelector((state) => state.data.data);
  const details = useSelector((state) => state.user.details);
  return (
    <PageLayout>
      <p>Year 2021 - 2022</p>
      {details && (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            All Events
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {details.events.map((eventId) => (
              <Dropdown.Item key={eventId} href={`/events/${eventId}`}>
                {transformEventIdToName(eventId)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
      {bakerData.length > 0 && (
        <StatTable
          group="Event"
          tableData={{
            data: bakerData,
            columns: bakerColumns,
          }}
          title="Baker"
        />
      )}
      {teamData.length > 0 && (
        <StatTable
          group="Event"
          tableData={{
            data: teamData,
            columns: teamColumns,
          }}
          title="Team"
        />
      )}
      {bakerMatchData.length > 0 && (
        <StatTable
          group="Event"
          tableData={{
            data: bakerMatchData,
            columns: bakerMatchPlayColumns,
          }}
          title="Baker Match Play"
        />
      )}
    </PageLayout>
  );
};

export default EventHome;
