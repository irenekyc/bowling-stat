import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import EventMetaData from "../index";

describe("Event Meta Data", () => {
  it("Render Event Meta Data default", () => {
    render(<EventMetaData />);
    const eventMetaData = screen.queryByTestId("event-meta-data");
    expect(eventMetaData).toBeNull();
  });
  it("Render Event Meta Data with meta data", () => {
    const sampleEventData = {
      name: "event name",
      location: "location",
      startDate: "start_date",
      endDate: "end_date",
    };
    render(<EventMetaData metaData={sampleEventData} />);
    const eventMetaData = screen.queryByTestId("event-meta-data");
    expect(eventMetaData).not.toBeNull();
    const eventMetaDataLocation = screen.queryByTestId(
      "event-meta-data-location"
    );
    const eventMetaDataDate = screen.queryByTestId("event-meta-data-date");
    expect(eventMetaDataLocation).toHaveTextContent(sampleEventData.location);
    expect(eventMetaDataDate).toHaveTextContent(
      `${sampleEventData.startDate} - ${sampleEventData.endDate}`
    );
  });

  it("Render Event Meta Data with meta data all", () => {
    const sampleEventData = {
      name: "all",
    };
    render(<EventMetaData metaData={sampleEventData} />);
    const eventMetaData = screen.queryByTestId("event-meta-data");
    expect(eventMetaData).toBeNull();
    const eventMetaDataLocation = screen.queryByTestId(
      "event-meta-data-location"
    );
    const eventMetaDataDate = screen.queryByTestId("event-meta-data-date");
    expect(eventMetaDataLocation).toBeNull();
    expect(eventMetaDataDate).toBeNull();
  });
});
