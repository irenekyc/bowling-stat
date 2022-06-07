import "./app.scss";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

import metaData from "./data/meta-data.json";
import MetaData from "./components/meta-data";

import Home from "./pages/home";
import BowlerStat from "./pages/bowler-stat";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchData } from "./redux/data/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
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
