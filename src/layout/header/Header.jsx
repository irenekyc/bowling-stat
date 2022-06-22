import BreadCrumb from "../../components/bread-crumb";
import { transformSlugToName } from "../../helpers/convertSlugAndName";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ level2 = undefined, level3 = undefined }) => {
  return (
    <nav className="flex bd-header" data-testid="header">
      <Container className="bd-header__bar">
        <div>
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
        </div>
        <Link to="/upload">Upload</Link>
      </Container>
    </nav>
  );
};

export default Header;
