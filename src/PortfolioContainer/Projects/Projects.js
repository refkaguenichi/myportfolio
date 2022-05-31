import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { BsLink45Deg } from "react-icons/bs";
const Projects = ({t}) => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">{t("projects.translated-text")}</h2>
        <div className="proj-content">
          <div className="proj-card">
            <div className="box">
              <span>
                <a
                  href="https://github.com/refkaguenichi/findx_app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiGithubBadge size={25} className="links-icons" />
                </a>
                <a
                  href="https://findxapp.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLink45Deg size={25} className="links-icons" />
                </a>
              </span>
              <h5 className="text">findX MERN</h5>
              <p>{t("project_one.translated-text")}</p>
              <div
                style={{
                  display: "flex",
                  "flex-wrap": "wrap",
                }}
              >
                <span className="key-word">React</span>
                <span className="key-word">Material-ui</span>
                <span className="key-word">Node</span>
                <span className="key-word">Express</span>
                <span className="key-word">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <span>
                <a
                  href="https://github.com/refkaguenichi/swift_shop"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiGithubBadge size={25} className="links-icons" />
                </a>
              </span>
              <h5 className="text">swiftShop MERN</h5>
              <p>{t("project_two.translated-text")}</p>
              <div
                style={{
                  display: "flex",
                  "flex-wrap": "wrap",
                }}
              >
                <span className="key-word">React</span>
                <span className="key-word">Material-ui</span>
                <span className="key-word">Node</span>
                <span className="key-word">Express</span>
                <span className="key-word">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <span>
                <a
                  href="https://github.com/refkaguenichi/TSQuiz"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiGithubBadge size={25} className="links-icons" />
                </a>
                <a
                  href="https://ts-r-quiz.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLink45Deg size={25} className="links-icons" />
                </a>
              </span>
              <h5 className="text">TSQuiz</h5>
              <p>Typescript quiz</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <span>
                <a
                  href="https://github.com/refkaguenichi/vuetify-todo"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiGithubBadge size={25} className="links-icons" />
                </a>
                <a
                  href="https://vuetify-r-todo.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLink45Deg size={25} className="links-icons" />
                </a>
              </span>
              <h5 className="text">Vuetify todo - Vue.js</h5>
              <p>Vue|Vuetify Todo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
