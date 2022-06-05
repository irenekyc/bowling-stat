import strikesData from "../../data/strikes-summary.json";
import doubleData from "../../data/doubles-summary.json";
import transformSummaryData from "../../helpers/transformSummaryData";
import firstBallAveData from "../../data/first_ball_ave-summary.json";
import StatTable from "../../components/stat-table";
import {
  DATA_SUMMARY_TYPE_STRIKES,
  DATA_SUMMARY_TYPE_DOUBLE,
  DATA_SUMMARY_TYPE_FIRST_BALL_AVERAGE,
} from "../../constants/data";

const SummaryData = () => {
  return (
    <div>
      <h2>Summary</h2>
      <StatTable
        tableData={transformSummaryData(strikesData, DATA_SUMMARY_TYPE_STRIKES)}
        title="Strikes"
      />
      <StatTable
        tableData={transformSummaryData(doubleData, DATA_SUMMARY_TYPE_DOUBLE)}
        title="Doubles"
      />
      <StatTable
        tableData={transformSummaryData(
          firstBallAveData,
          DATA_SUMMARY_TYPE_FIRST_BALL_AVERAGE
        )}
        title="First Ball Average"
      />
    </div>
  );
};

export default SummaryData;
