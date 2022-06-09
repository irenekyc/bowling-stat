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
    </div>
  );
};

export default EventMetaData;
