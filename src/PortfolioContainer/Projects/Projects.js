import React from "react";
import { VscCode } from "react-icons/vsc";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">Projects</h2>
        <div className="proj-content">
          <div className="proj-card">
            <div className="box">
              <VscCode className="icon" />
              <div className="text">Project 1</div>
              <p>project name</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <VscCode className="icon" />
              <div className="text">Project 2</div>
              <p>project name</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <VscCode className="icon" />
              <div className="text">Project 3</div>
              <p>project name</p>
            </div>
          </div>
          <div className="proj-card">
            <div className="box">
              <VscCode className="icon" />
              <div className="text">Project 4</div>
              <p>project name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
