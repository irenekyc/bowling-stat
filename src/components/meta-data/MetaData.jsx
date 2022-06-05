import formatColumnNames from "../../helpers/formatColumnNames";

const MetaData = ({ metaData }) => {
  const {
    location,
    team,
    start_date,
    end_date,
    oil_pattern,
    bowlers,
    ...num_of_games
  } = metaData;
  return (
    <div>
      <h1>{team}</h1>
      <p>Venue: {location}</p>
      <p>
        Date: {start_date} - {end_date}
      </p>
      <p>
        {Object.entries(num_of_games).map(([key, value]) => (
          <p key={key + value}>
            {formatColumnNames(key)} : {value}
          </p>
        ))}
      </p>
      <p>Oil Pattern: {oil_pattern}</p>
      <p>Bowlers</p>
      <ul>
        {bowlers.map((bowler) => (
          <li key={bowler}>{bowler}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetaData;
