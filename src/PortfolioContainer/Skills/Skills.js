import React from "react";

const Skills = ({t}) => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">{t("skills.translated-text")}</h2>
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
                <span>CSS</span>
                <span>95%</span>
              </div>
              <div className="line css-scss"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JS</span>
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
                <span>Vue</span>
                <span>75%</span>
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
                <span>My SQL</span>
                <span>65%</span>
              </div>
              <div className="line mysql"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>PHP</span>
                <span>65%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>65%</span>
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
