import { Routes, Route, Link } from "react-router-dom";
import Contact from "./contact";
import Features from "./features";
import Home from "./home";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1>Cover</h1>
        </div>
        <div className="linkCont">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/Features">Features</Link>
          <Link className="link" to="/Contact">Contact</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Header;
