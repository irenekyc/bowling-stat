import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/bread-crumb";
import { transformSlugToName } from "../../helpers/convertSlugAndName";
import { Container } from "react-bootstrap";

const Header = ({ level2 = undefined, level3 = undefined }) => {
  // const [breadcrumbs, setBreadCrumbs] = useState({
  //   level2: undefined,
  //   level3: undefined,
  // });
  // const { teamId } = useParams();

  // useEffect(() => {
  //   setBreadCrumbs({
  //     level2: teamId,
  //     level3: eventId || bowlerSlug,
  //   });
  // }, [teamId]);

  return (
    <nav className="flex bd-header">
      <Container>
        <BreadCrumb label="Home" link="/" isActive={level2 ? false : true} />
        {level2 && (
          <BreadCrumb
            label={transformSlugToName(level2, "team")}
            link={`/${level2}`}
            isActive={level3 ? false : true}
          />
        )}
        {level3 && (
          <BreadCrumb label={level3} isActive={level3 ? false : true} />
        )}
      </Container>
    </nav>
  );
};

export default Header;
