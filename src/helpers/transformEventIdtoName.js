const transformEventIdToName = (eventId) => {
  const [eventName, year] = eventId.split("--");
  const formatedEventName = eventName
    .split("-")
    .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
    .join(" ");
  const formatedYear = `(${year})`;
  return formatedEventName + " " + formatedYear;
};

export default transformEventIdToName;
