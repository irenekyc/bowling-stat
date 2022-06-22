import { Link } from "react-router-dom";
import Header from "../../layout/header";

import { Container } from "react-bootstrap";
import Page from "../../layout/page";
import Main from "../../layout/main";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchTeamList = async () => {
      const res = await axios.get(
        "https://fierce-plateau-64816.herokuapp.com/teams"
      );
      setTeams(res.data.teams);
    };
    fetchTeamList();
  }, []);
  return (
    <Page>
      <Header />
      <Main>
        <Container>
          <h2 data-testid="home-page-title">Teams</h2>
          {teams.map((team) => (
            <p key={team.team_id} data-testid="home-page-team-list">
              <Link to={{ pathname: `/${team.team_id}` }}>
                {team.team_name}
              </Link>
            </p>
          ))}
          <p>
            Do not see your team? Start{" "}
            <Link to={{ pathname: "/upload" }}>
              uploading your first event here
            </Link>
          </p>
        </Container>
      </Main>
    </Page>
  );
};

export default Home;
