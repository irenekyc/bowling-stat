import "./app.scss";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

import Home from "./pages/home";
import BowlerHome from "./pages/bowler-home";
import BowlerStat from "./pages/bowler-stat";
import EventHome from "./pages/event-home";
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
            <Route path="events" element={<EventHome />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="bowlers" element={<BowlerHome />} />
            <Route path="/bowlers/:bowlerName" element={<BowlerStat />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
