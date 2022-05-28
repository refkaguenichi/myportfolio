import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaBars } from "react-icons/fa";
import Lang from './../Lang/Lang';

const Navbar = ({ handleOpen, t }) => {
  return (
    <nav className="main-navbar">
      <div className="max-width">
        <div className="logo">
          <Link to="home">
            <span
              style={{
                "font-size": "45px",
                "font-weight": "700",
                color: "#fff",
              }}
            >
              rg
            </span>
            <span
              style={{
                "font-size": "18px",
                "font-weight": "100",
                color: "crimson",
              }}
            >
              portfolio.
            </span>
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="home">
              <FaHome size={25} />
            </Link>
          </li>
          <li>
            <Link to="about">{t("about.translated-text")}</Link>
          </li>
          <li>
            <Link to="skills">{t("skills.translated-text")}</Link>
          </li>
          <li>
            <Link to="projects">{t("projects.translated-text")}</Link>
          </li>
          <li>
            <Link to="contactme">{t("contact.translated-text")}</Link>
          </li>
          <li>
            <Lang />
          </li>
        </ul>
        <FaBars className="menu-btn" onClick={handleOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
