import { useSelector } from "react-redux";
import TeamMetaData from "../../components/team-meta-data";

const PageLayout = ({ children }) => {
  const details = useSelector((state) => state.user);
  if (!details) return <>Loading...</>;
  return (
    <>
      <TeamMetaData />
      {children}
    </>
  );
};

export default PageLayout;
