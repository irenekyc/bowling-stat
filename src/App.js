import "./app.scss";

import Home from "./pages/home";

import { Route, Routes } from "react-router-dom";
import Team from "./pages/team";
import UploadPage from "./pages/upload";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/upload" element={<UploadPage />} />
      <Route exact path="/:teamId/*" element={<Team />} />
    </Routes>
  );
}

export default App;
