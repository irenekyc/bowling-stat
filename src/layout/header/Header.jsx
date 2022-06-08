import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/bread-crumb";
import { transformSlugToName } from "../../helpers/convertSlugAndName";

const Header = () => {
  const [breadcrumbs, setBreadCrumbs] = useState({
    level2: undefined,
    level3: undefined,
  });
  const { teamId, eventId, bowlerSlug } = useParams();

  useEffect(() => {
    setBreadCrumbs({
      level2: teamId,
      level3: eventId || bowlerSlug,
    });
  }, [teamId, eventId, bowlerSlug]);

  return (
    <nav className="flex">
      <BreadCrumb
        label="Home"
        link="/"
        isActive={breadcrumbs.level2 ? false : true}
      />
      {breadcrumbs.level2 && (
        <BreadCrumb
          label={transformSlugToName(teamId, "team")}
          link={`/${teamId}`}
          isActive={breadcrumbs.level3 ? false : true}
        />
      )}
      {breadcrumbs.level3 && (
        <BreadCrumb
          label={breadcrumbs.level3}
          isActive={breadcrumbs.level3 ? false : true}
        />
      )}
    </nav>
  );
};

export default Header;
