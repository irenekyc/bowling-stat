import {
  transformNameToSlug,
  transformSlugToName,
} from "../convertSlugAndName";

describe("From Slug to Name", () => {
  it("Team Name", () => {
    const name = transformSlugToName("qu-women", "team");
    expect(name).toEqual("QU Women");
  });
  it("Bowler Name", () => {
    const name = transformSlugToName("bowler-name");
    expect(name).toEqual("Bowler Name");
  });
});

describe("From Name to Slug", () => {
  it("Team Name", () => {
    const name = transformNameToSlug("QU Women");
    expect(name).toEqual("qu-women");
  });
  it("Bowler Name", () => {
    const name = transformNameToSlug("Bowler Name");
    expect(name).toEqual("bowler-name");
  });
});
