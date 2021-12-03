import React from "react";
import image from "../../assets/About/graduation.png";
import cv from "../../assets/About/refka-cv.pdf";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={image} alt="about" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Refka and I'm a <span>Web developer</span>
            </div>
            <p>
              Passionate and self-motivated Advanced Technologies enginner.
              Excited to be at the deployment phase of my new career as a web
              developer. I am ambitious, adventurous, assiduous, animated, and
              an alliteration advocate.My aim is to realize new challenges and
              join a huge company which is leader in the new technologies field.
            </p>
            <a href={cv} download="Refka Guenichi CV.pdf">
              <button className="btn highlighted-btn">Donwload CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
