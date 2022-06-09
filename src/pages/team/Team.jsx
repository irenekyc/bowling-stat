import { Routes, Route, useParams } from "react-router-dom";
import TeamHome from "../team-home";
import EventDetails from "../event-details";
import BowlerStat from "../bowler-stat";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTeamData } from "../../redux/team/actions";

const TeamApp = () => {
  const dispatch = useDispatch();
  const { teamId, ...rest } = useParams();
  const { team } = useSelector((state) => state.team);

  useEffect(() => {
    if (!teamId) return;
    if (!team || teamId !== team) {
      dispatch(fetchTeamData(teamId));
    }
  }, [dispatch, teamId, team]);
  return (
    <Routes>
      <Route path="events/:eventId" element={<EventDetails />} />
      <Route path="bowlers/:bowlerSlug" element={<BowlerStat />} />
      <Route path="/" element={<TeamHome />} />
    </Routes>
  );
};
export default TeamApp;
