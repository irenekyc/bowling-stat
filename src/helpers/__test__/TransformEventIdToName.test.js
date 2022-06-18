import transformEventIdToName from "../transformEventIdtoName";

describe("Transform Event Id to name", () => {
  it("Event Id is null", () => {
    const eventName = transformEventIdToName();
    expect(eventName).toEqual("");
  });
  it("Event Id to Event name successfully", () => {
    const eventName = transformEventIdToName("event-id--2021-2022");
    expect(eventName).toEqual("Event Id (2021-2022)");
  });
});
