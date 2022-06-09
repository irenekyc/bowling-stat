import "./app.scss";

import Home from "./pages/home";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Team from "./pages/team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:teamId/*" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
