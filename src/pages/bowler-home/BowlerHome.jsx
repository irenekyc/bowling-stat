import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageLayout from "../../layout/page-layout";
import getAllBowlers from "../../helpers/getAllBowlers";
import { bakerColumns } from "../../helpers/transformBakerData";
import StatTable from "../../components/stat-table";
import { transformBowlerNameToSlug } from "../../helpers/formatBowlerName";

const BowlerHome = () => {
  const [bowlers, setAllBowlers] = useState([]);
  const { baker: bakerData } = useSelector((state) => state.data.data);
  useEffect(() => {
    if (bakerData.length === 0) return;
    const bowlers = getAllBowlers(bakerData);
    setAllBowlers(bowlers);
  }, [bakerData]);
  return (
    <PageLayout>
      <div className="bd-bowler-home__bowler-list">
        {bowlers.map((bowlerName) => (
          <a
            key={bowlerName}
            href={`/bowlers/${transformBowlerNameToSlug(bowlerName)}`}
          >
            {bowlerName}
          </a>
        ))}
      </div>
      <div>
        <strong>Year 2021 - 2022</strong>
        {bakerData.length > 0 && (
          <StatTable
            tableData={{ data: bakerData, columns: bakerColumns }}
            group="Bowler-ALL"
            title="Baker"
          />
        )}
      </div>
    </PageLayout>
  );
};

export default BowlerHome;
