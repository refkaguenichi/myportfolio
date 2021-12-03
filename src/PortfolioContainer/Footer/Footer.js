import React from "react";

const Footer = () => {
  return (
    <footer>
      <span className="foot-name">
        Portfo<span className="foot-name-part">lio.</span>
      </span>
      , made to know more about my profile.
      <span> &copy; {1900 + new Date().getYear()} All rights reserved. </span>
    </footer>
  );
};

export default Footer;
