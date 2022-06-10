import { Link } from "react-router-dom";
import Header from "../../layout/header";

import { Container } from "react-bootstrap";
import Page from "../../layout/page";
import Main from "../../layout/main";

const Home = () => {
  return (
    <Page>
      <Header />
      <Main>
        <Container>
          <h2>Teams</h2>
          <p>
            <Link to="/qu-women">QU Women</Link>
          </p>
          <p>
            <Link to="/qu-men">QU Men</Link>
          </p>
        </Container>
      </Main>
    </Page>
  );
};

export default Home;
