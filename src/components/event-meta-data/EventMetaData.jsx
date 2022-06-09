import formatColumnNames from "../../helpers/formatColumnNames";
import "./meta-data.scss";

const EventMetaData = ({ metaData }) => {
  if (metaData === "All") {
    return <></>;
  }
  const { location, start_date, end_date } = metaData;
  return (
    <div className="bd-event-meta">
      <div className="bd-event-meta__details-row">
        <span>
          <strong>Venue:</strong> {location}
        </span>{" "}
        <span>
          <strong>Date: </strong>
          {start_date} - {end_date}
        </span>
      </div>

      {/* <p> */}
      {/* {Object.entries(num_of_games).map(([key, value]) => (
          <span key={key + value}>
            {formatColumnNames(key)} : {value}
          </span>
        ))}
      </p> */}
      {/* <span style={{ display: "none" }}>Oil Pattern: {oil_pattern}</span>
      <span>
        <strong>Bowlers</strong>
      </span>
      <ul>
        {bowlers.map((bowler) => (
          <li key={bowler}>{bowler}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default EventMetaData;
