import "./app.scss";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

import Home from "./pages/home";
import BowlerStat from "./pages/bowler-stat";
import EventDetails from "./pages/event-details";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchData } from "./redux/data/actions";
import { fetchUser } from "./redux/user/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div className="bd-main">
      <Container>
        {/* <MetaData metaData={metaData} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="events">
              <Route path=":eventId" element={<EventDetails />} />
            </Route>
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
