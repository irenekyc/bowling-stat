import formatColumnNames from "../../helpers/formatColumnNames";
import "./meta-data.scss";

const MetaData = ({ metaData }) => {
  const {
    location,
    team,
    start_date,
    end_date,
    oil_pattern,
    bowlers,
  } = metaData;
  return (
    <div className="bd-event-meta">
      <h1>{team}</h1>
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
      <span style={{ display: "none" }}>Oil Pattern: {oil_pattern}</span>
      <span>
        <strong>Bowlers</strong>
      </span>
      <ul>
        {bowlers.map((bowler) => (
          <li key={bowler}>{bowler}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetaData;
