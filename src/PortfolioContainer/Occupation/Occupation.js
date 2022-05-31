import React from "react";
import image from "../../assets/About/work.jpg";

const Occupation = ({ t }) => {
  return (
    <section className="occupation about" id="occupation">
      <div className="max-width">
        <h2 className="title">{t("position.translated-text")}</h2>
        <div className="about-content" style={{ "margin-top": "15px" }}>
          <div className="column left">
            <img src={image} alt="job" />
          </div>
          <div className="column right">
            <div className="text">
              <span>
                {t("work_at.translated-text")}
                <a
                  href="https://www.podyam.com/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ color: "crimson", "margin-left": "10px" }}
                >
                  PODYAM
                </a>
              </span>
            </div>
            <ul>
              <li className="work">{t("work_one.translated-text")}</li>
              <li className="work">{t("work_two.translated-text")}</li>
              <li className="work">{t("work_three.translated-text")}</li>
              <li className="work">{t("work_four.translated-text")}</li>
            </ul>
            <div
              style={{
                display: "flex",
                "flex-wrap": "wrap",
              }}
            >
              <span className="key-word">Vue</span>
              <span className="key-word">Bootstrap</span>
              <span className="key-word">Quasar</span>
              <span className="key-word">Express</span>
              <span className="key-word">Node</span>
              <span className="key-word">PostgreSQL</span>
              <span className="key-word">knex</span>
              <span className="key-word">Objection js</span>
              <span className="key-word">Docker</span>
              <span className="key-word">Elastic search</span>
              <span className="key-word">Azure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Occupation;
