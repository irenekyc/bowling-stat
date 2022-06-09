import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TeamMetaData = () => {
  const { details } = useSelector((state) => state.user);
  if (!details) return <div>Loading...</div>;
  return (
    <div className="bd-header">
      <h2 className="bd-header__userName">QU Women</h2>
      <div className="bd-header__events-list">
        <span>
          <strong>
            <Link to="/events">All Events</Link>
          </strong>
        </span>
        <span>
          <strong>
            <Link to="/bowlers">All Bowlers</Link>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default TeamMetaData;
