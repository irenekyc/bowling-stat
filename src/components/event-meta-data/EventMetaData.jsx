import "./meta-data.scss";

const EventMetaData = ({ metaData }) => {
  if (!metaData) return null;
  if (metaData.toLowerCase().includes("all")) {
    return <></>;
  }
  // const { location, startDate, endDate } = metaData;
  return (
    <div className="bd-event-meta" data-testid="event-meta-data">
      {/* <div className="bd-event-meta__details-row">
        {location && (
          <span data-testid="event-meta-data-location">
            <strong>Venue:</strong> {location}
          </span>
        )}
        {startDate && endDate && (
          <span data-testid="event-meta-data-date">
            <strong>Date: </strong>
            {startDate} - {endDate}
          </span>
        )}
      </div> */}
    </div>
  );
};

export default EventMetaData;
