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
          Currently based in Copenhagen , Denmark. studying web development. I have focused on HTML , CSS , JavaScript , Node.js , git/Github ,Storybook , MYSQL , Postman and React to start with, and continue to study and work on private projects. I completed a bootcamp called Hack Your Future, and graduated in June 2022. I am also learning Danish language course.
          <br />
          <br />
          <br />
          Check out my work
        </p>
      </div>
      <div className="basic-info">
        <img src={MyImage} alt="my own pic" />
      </div>
    </div>
  );
}
