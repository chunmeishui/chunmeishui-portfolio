import React from "react";
import "../App.css";
import MyImage from "../images/06.png";

export default function About() {
  return (
    <div className="main-container">
      <div className="basic-info" id="about-me">
        <h1>Hi, I'm Chunmei.</h1>
        <h3>Web developer.</h3>
        <p>
          I grew up in the southwest part of China Sichuan,a small countryside
          in Shehong.I attended the University of Shanxi Traditional Chinese
          Medicine.But I worked as a financial assistant in Mærsk China for
          around 4 years.I have been in Denmark with my whole family for 4
          years now.
        </p>
        <br />
        <br />
        <p>
          Currently based in Copenhagen, Denmark. studying web development.I
          have focused on HTML,CSS,JavaScript, Node.js,Git/GitHub,Storybook ,MySQL,Postman and React to start with,and
          continue to study and work on private projects.I completed a bootcamp called Hack Your Future,and graduated in June 2022.I am also
          learning Danish language course.
          <br />
          <br />
          <br />
          <a href="#portfolio">Check out my work</a>
        </p>
      </div>
      <div className="basic-info">
        <img src={MyImage} alt="my own pic" />
      </div>
    </div>
  );
}
