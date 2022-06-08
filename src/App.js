import "./app.scss";
import { Container } from "react-bootstrap";

import Home from "./pages/home";

import BowlerStat from "./pages/bowler-stat";
import TeamHome from "./pages/team-home";
import EventDetails from "./pages/event-details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bd-main">
      <Container>
        {/* <MetaData metaData={metaData} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:teamId" element={<TeamHome />} />
            <Route path="/:teamId/events/:eventId" element={<EventDetails />} />
            {/* <Route path="/:teamId/bowlers" element={<BowlerHome />} /> */}
            <Route
              path="/:teamId/bowlers/:bowlerSlug"
              element={<BowlerStat />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
