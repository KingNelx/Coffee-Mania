import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Philosophy from "./Pages/Philosophy";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="router">
      <Router>
        <div className="app-links">
          <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
            Home
          </Link>
          <Link
            to="/menu"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Menu
          </Link>
          <Link
            to="/philosophy"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Philosophy
          </Link>

          <Link
            to="/contact"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Contact
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/philosophy" element={<Philosophy />} />q
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
