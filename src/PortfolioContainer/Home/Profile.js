import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";

const Profile = () => {
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
              <a
                href="https://www.facebook.com/rebe.kah.524/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/refka_guenichi/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, my name is
              <h2 className="secondary-text"> Refka Guenichi</h2>
            </span>
          </div>
          <div className="profile-role ">
            <h1 className="third-text">
              {""}
              <span>And I'm a </span>
              <Typical
                className="highlighted-text"
                loop={Infinity}
                steps={[
                  "Fullstack Developer🔴",
                  1000,
                  "Frontend Developer⚛️",
                  1000,
                  "Backend Developer💻",
                  1000,
                ]}
              />
            </h1>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              <Link to="contactme"> Hire Me</Link>
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
