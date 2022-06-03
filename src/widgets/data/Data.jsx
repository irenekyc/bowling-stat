import { useState, useEffect } from "react";
import loadData from "../../helpers/loadData";
import DataTable from "../../components/data-table";
import { GAME_BAKER } from "../../constants";
import renderDataTitle from "../../helpers/renderDataTitle";

const Data = ({ gameType, viewType }) => {
  const [currentData, setCurrentData] = useState({
    header: [],
    data: [],
  });
  useEffect(() => {
    const { columns, data } = loadData({ gameType, viewType });
    setCurrentData({
      header: columns,
      data,
    });
  }, [gameType, viewType]);

  return (
    <div>
      {gameType !== GAME_BAKER ? (
        <p>Data coming soon</p>
      ) : (
        <DataTable
          title={renderDataTitle({ gameType, viewType })}
          tableHeader={currentData.header}
          tableData={currentData.data}
        />
      )}
    </div>
  );
};

export default Data;
