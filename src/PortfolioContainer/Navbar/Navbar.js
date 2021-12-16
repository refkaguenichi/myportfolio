import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaBars } from "react-icons/fa";

const Navbar = ({ handleOpen }) => {
  return (
    <nav className="main-navbar">
      <div className="max-width">
        <div className="logo">
          <Link to="home">
            {" "}
            Portfo
            <span>lio.</span>
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="home">
              <FaHome size={25} />
            </Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contactme">Contact</Link>
          </li>
        </ul>
        <FaBars className="menu-btn" onClick={handleOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
