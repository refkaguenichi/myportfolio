import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";

const Profile = ({t}) => {
  return (
    <section className="profile" id="home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/refka-guenichi-3a522a221/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/refkaguenichi"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              {t("salutation.translated-text")}
              <h2 className="secondary-text"> Refka Guenichi</h2>
            </span>
          </div>
          <div className="profile-role ">
            <h1 className="third-text">
              {""}
              {/* <span>And I'm a </span> */}
              <Typical
                className="highlighted-text"
                loop={Infinity}
                steps={[
                  t("fullstack.translated-text"),
                  1000,
                  t("frontend.translated-text"),
                  1000,
                  t("backend.translated-text"),
                  1000,
                ]}
              />
            </h1>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              <Link to="contactme">{t("hire_me.translated-text")}</Link>
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
