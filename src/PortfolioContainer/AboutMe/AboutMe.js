import React from "react";
import { useTranslation } from "react-i18next";
import image from "../../assets/About/graduation.png";
import cv from "../../assets/About/english_cv.pdf";
import cv2 from "../../assets/About/french_cv.pdf";

const AboutMe = ({t}) => {
  const { i18n } = useTranslation();
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">{t("about.translated-text")}</h2>
        <div className="about-content">
          <div className="column left">
            <img src={image} alt="about" />
          </div>
          <div className="column right">
            <div className="text">
              <span>{t("about_me_title.translated-text")}</span>
            </div>
            <p>{t("about_me_paragraph.translated-text")}</p>
            <a
              href={i18n.language === "fr" ? cv2 : cv}
              download="Refka Guenichi CV.pdf"
            >
              <button className="btn highlighted-btn">
                {t("about_me_cv.translated-text")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
