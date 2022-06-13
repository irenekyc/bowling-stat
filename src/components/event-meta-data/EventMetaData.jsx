import "./meta-data.scss";

const EventMetaData = ({ metaData }) => {
  if (!metaData) return null;
  if (metaData.name.toLowerCase().includes("all")) {
    return <></>;
  }
  const { location, startDate, endDate } = metaData;
  return (
    <div className="bd-event-meta">
      <div className="bd-event-meta__details-row">
        {location && (
          <span>
            <strong>Venue:</strong> {location}
          </span>
        )}
        {startDate && endDate && (
          <span>
            <strong>Date: </strong>
            {startDate} - {endDate}
          </span>
        )}
      </div>
    </div>
  );
};

export default EventMetaData;
