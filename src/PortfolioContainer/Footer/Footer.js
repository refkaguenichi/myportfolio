import React from "react";

const Footer = ({t}) => {
  return (
    <footer>
      <span
        style={{ "font-size": "30px", "font-weight": "600", color: "#fff" }}
      >
        rg
      </span>
      <span style={{ "font-size": "18px", "font-weight": "100", color:"crimson" }}>
        portfolio
      </span>
      , {t("footer_one.translated-text")}
      <span>
        {" "}
        &copy; {1900 + new Date().getYear()} {t("footer_two.translated-text")}{" "}
      </span>
    </footer>
  );
};

export default Footer;
