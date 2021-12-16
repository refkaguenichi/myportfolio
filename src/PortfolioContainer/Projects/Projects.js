import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { BsLink45Deg } from "react-icons/bs";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">Projects</h2>
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
              <p>
                Lost and Found application,it helps users to tarck their
                objects.
              </p>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <span>
                <a
                  href="https://github.com/refkaguenichi/magasa"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiGithubBadge size={25} className="links-icons" />
                </a>
                {/* <a
                  href="https://findxapp.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLink45Deg size={25} className="links-icons" />
                </a> */}
              </span>
              <h5 className="text">magasa MERN</h5>
              <p>E-commerce app, it’s under development</p>
              <span></span>
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
          <div className="proj-card">
            <div className="box">
              <span>
                <a
                  href="https://github.com/refkaguenichi/vue-product"
                  rel="noreferrer"
                  target="_blank"
                >
                  <DiGithubBadge size={25} className="links-icons" />
                </a>
                <a
                  href="https://vue-basic.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsLink45Deg size={25} className="links-icons" />
                </a>
              </span>
              <h5 className="text">Vue product - Vue.js</h5>
              <p>Vue basic ecommerce exemple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
