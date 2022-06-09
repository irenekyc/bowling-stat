import BreadCrumb from "../../components/bread-crumb";
import { transformSlugToName } from "../../helpers/convertSlugAndName";
import { Container } from "react-bootstrap";

const Header = ({ level2 = undefined, level3 = undefined }) => {
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
