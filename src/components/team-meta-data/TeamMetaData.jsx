import { useSelector } from "react-redux";
import transformEventIdToName from "../../helpers/transformEventIdtoName";

const TeamMetaData = () => {
  const { details } = useSelector((state) => state.user);
  if (!details) return <div>Loading...</div>;
  return (
    <div className="bd-header">
      <h2 className="bd-header__userName">QU Women</h2>
      <ul className="bd-header__events-list">
        <span>
          <strong>Events: </strong>
        </span>
        {details.events.map((event) => (
          <li key={event}>
            <a href={`/events/${event}`}>{transformEventIdToName(event)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMetaData;
