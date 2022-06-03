const MetaData = ({ team, location, start_date, end_date }) => {
  return (
    <div>
      <h1>{team}</h1>
      <p>Venue: {location}</p>
      <p>
        Date: {start_date} - {end_date}
      </p>
    </div>
  );
};

export default MetaData;
