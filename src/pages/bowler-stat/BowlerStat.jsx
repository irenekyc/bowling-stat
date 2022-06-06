import { useParams } from "react-router-dom";

const BowlerStat = () => {
  let { bowlerName } = useParams();

  return (
    <div>
      {bowlerName}
      <p>Coming Soon</p>
    </div>
  );
};

export default BowlerStat;
