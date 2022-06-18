import StatSummaryTable from "../../components/stat-summary-table";
import {
  SUMMARY_SCORE,
  SUMMARY_STRIKES,
  SUMMARY_DOUBLE,
  SUMMARY_FIRST_BALL_AVE,
} from "../../constants/summary";
import {
  summaryDoublesColumns,
  summaryFirstBallAveColumns,
  summaryScoreColumns,
  summaryStrikesColumns,
} from "./summary-data-columns";

const SummaryData = ({ summaryStatistic = [] }) => {
  if (summaryStatistic.length === 0) return null;
  return (
    <div data-testid="summary-statistic-widget">
      <StatSummaryTable
        data={summaryStatistic}
        title={SUMMARY_SCORE}
        columns={summaryScoreColumns}
      />
      <StatSummaryTable
        data={summaryStatistic}
        title={SUMMARY_STRIKES}
        columns={summaryStrikesColumns}
      />
      <StatSummaryTable
        data={summaryStatistic}
        title={SUMMARY_DOUBLE}
        columns={summaryDoublesColumns}
      />
      <StatSummaryTable
        data={summaryStatistic}
        title={SUMMARY_FIRST_BALL_AVE}
        columns={summaryFirstBallAveColumns}
      />
    </div>
  );
};

export default SummaryData;
