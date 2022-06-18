import transformSummaryTableTitle from "../transformSummaryTableTitle";
import {
  SUMMARY_DOUBLE,
  SUMMARY_FIRST_BALL_AVE,
  SUMMARY_SCORE,
  SUMMARY_STRIKES,
} from "../../../constants/summary";

describe("Transform Summary Table", () => {
  it("Doubles", () => {
    const title = transformSummaryTableTitle(SUMMARY_DOUBLE);
    expect(title).toEqual("Doubles");
  });
  it("First Ball Average", () => {
    const title = transformSummaryTableTitle(SUMMARY_FIRST_BALL_AVE);
    expect(title).toEqual("1st Ball Average");
  });
  it("Scores", () => {
    const title = transformSummaryTableTitle(SUMMARY_SCORE);
    expect(title).toEqual("Scores");
  });
  it("Strikes", () => {
    const title = transformSummaryTableTitle(SUMMARY_STRIKES);
    expect(title).toEqual("Strikes");
  });
  it("Random", () => {
    const title = transformSummaryTableTitle("random");
    expect(title).toEqual("");
  });
});
