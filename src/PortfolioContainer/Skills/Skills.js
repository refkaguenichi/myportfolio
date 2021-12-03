import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS/SCSS</span>
                <span>95%</span>
              </div>
              <div className="line css-scss"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JS/TS</span>
                <span>90%</span>
              </div>
              <div className="line js-ts"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="line react"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Angular</span>
                <span>85%</span>
              </div>
              <div className="line angular"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Vue</span>
                <span>85%</span>
              </div>
              <div className="line vue"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Node</span>
                <span>95%</span>
              </div>
              <div className="line node"></div>
            </div>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>Express</span>
                <span>95%</span>
              </div>
              <div className="line express"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MongoDB</span>
                <span>95%</span>
              </div>
              <div className="line mongodb"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Mongoose</span>
                <span>95%</span>
              </div>
              <div className="line mongoose"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>80%</span>
              </div>
              <div className="line java"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>My SQL</span>
                <span>75%</span>
              </div>
              <div className="line mysql"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>PHP</span>
                <span>75%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>75%</span>
              </div>
              <div className="line python"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
