import { useSelector } from "react-redux";

const TeamMetaData = () => {
  const { details } = useSelector((state) => state.user);
  if (!details) return <div>Loading...</div>;
  return (
    <div className="bd-header">
      <h2 className="bd-header__userName">QU Women</h2>
      <div className="bd-header__events-list">
        <span>
          <strong>
            <a href="/events">All Events</a>
          </strong>
        </span>
        <span>
          <strong>
            <a href="/bowlers">All Bowlers</a>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default TeamMetaData;
