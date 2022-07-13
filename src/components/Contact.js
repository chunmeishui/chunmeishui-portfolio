import React from "react";
import "../App.css";
import Linkedin from "../images/linkedin.png";
import GitHub from "../images/github.png";
import Email from "../images/email.png";
import Cv from "../images/chunmei-cv.pdf";

export default function Contact() {
  return (
    <div className="contact-container">
      <footer id="footer">
        <section>
          <h2>Contact me</h2>
          <a
            href="mailto:chunmeishui578659@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <h4>chunmeishui578659@gmail.com</h4>
          </a>
          <p>
            I am always keen to collaborate. I'm hoping to find a suitable
            position in the tech sector. Let's get in touch.
          </p>
        </section>
        <section className="split contact">
          <section className="alt">
            <h3 id="contact">Address</h3>
            <p>
              Lyngby
              <br />
              copenhagen Denmark
            </p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>+45 50309536</p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="mailto:chuneishui578659@gmail.com">
                chuneishui578659@gmail.com
              </a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li>
                <a
                  href="https://www.linkedin.com/in/chunmei-shui/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="contact-logo" src={Linkedin} alt="linkedin logo" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:chunmeishui578659@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="contact-logo" src={Email} alt="github logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chunmeishui"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="contact-logo" src={GitHub} alt="email logo" />
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>
      <div id="copyright">
        <p>
          {" "}
          &copy; Hire Developer : <a href={Cv}>Chunmei</a>
        </p>
      </div>
    </div>
  );
}
