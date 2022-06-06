import "./app.scss";
import { Container } from "react-bootstrap";

import metaData from "./data/meta-data.json";
import MetaData from "./components/meta-data";

import Home from "./pages/home";
import BowlerStat from "./pages/bowler-stat";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bd-main">
      <Container>
        <MetaData metaData={metaData} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bowlers">
              <Route path=":bowlerName" element={<BowlerStat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
