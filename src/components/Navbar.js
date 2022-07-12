import React, { useState } from "react";
import PortfolioLogo from "../images/Portfolio.png";
import Menu from "../images/menu-icon-6.jpg";
import Cv from "../images/chunmei-cv.pdf";
import "../App.css";

export default function Navbar() {
  const [mobileMenue, setMobileMenue] = useState("none");
  // const [click,setClick]= useState(false)

  const onHandleChangeClassName = () => {
    mobileMenue === "none"
      ? setMobileMenue("navigation-list-display")
      : setMobileMenue("none");
  };

  return (
    <nav className="navigation-container">
      <div className="navigation">
        <div className="navigation-logo-container">
          <img className="navigation-logo" src={PortfolioLogo} alt="logo" />
        </div>
        <div className="navigation-list-container">
          <ul className="navigation-list">
            <li>
              <a href="#portfolio">Portofolio</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
              <a href={Cv}>Resume</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        {/* this is mobile layout menu */}

        <div className="navigation-list-container-mobile">
          <div>
            <button onClick={onHandleChangeClassName}>
              <img src={Menu} alt="icon" />
            </button>
          </div>
          <div>
            <ul className={mobileMenue}>
              <li>
                <a href="#portfolio">Portofolio</a>
              </li>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href={Cv}>Resume</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="intro">
        <h1>CHUNMEI SHUI</h1>
        <h2>Frontend Developer . Full Stack Developer</h2>
      </div>
      <header className="header">
        HTML/CSS /Javascript/ Node.js/ React /Mysql ...
      </header>
    </nav>
  );
}
