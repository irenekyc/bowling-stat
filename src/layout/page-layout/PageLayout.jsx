import TeamMetaData from "../../components/team-meta-data";

const PageLayout = ({ children }) => {
  return (
    <>
      <TeamMetaData />
      {children}
    </>
  );
};

export default PageLayout;
