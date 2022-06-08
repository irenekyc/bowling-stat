import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import TeamMetaData from "../../components/team-meta-data";
import { useParams } from "react-router";
import Header from "../header";
import { fetchBowlerList, fetchEventList } from "../../redux/team/actions";

const PageLayout = ({ children }) => {
  const { teamId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!teamId) return;
    dispatch(fetchBowlerList(teamId));
    dispatch(fetchEventList(teamId));
  }, [dispatch, teamId]);

  if (!teamId) return <></>;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
