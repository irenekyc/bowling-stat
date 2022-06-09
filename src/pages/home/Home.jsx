import { Link } from "react-router-dom";
import Header from "../../layout/header";

import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Teams</h2>
        <p>
          <Link to="/qu-women">QU Women</Link>
        </p>
        <p>
          <Link to="/qu-men">QU Men</Link>
        </p>
      </Container>
    </>
  );
};

export default Home;
