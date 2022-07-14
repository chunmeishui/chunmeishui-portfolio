import React from "react";
import "../App.css";
import Spices from "../images/pic02.png";
import Meal from "../images/02.png";
import Faster from "../images/04.png";
import Weather from "../images/03.png";

export default function Projects() {
  return (
    <div className="project-container" id="portfolio">
      <div className="title">
        <h2>FEATURED PROJECTS</h2>
      </div>

      <section>
        <article>
          <div>
            <a
              href="http://staging-webshop-class20-fp.herokuapp.com/"
              class="image fit"
            >
              <img src={Spices} alt=" spices web " />
            </a>
          </div>
          <div className="project-text">
            <header>
              <h2>simply spices shop</h2>
            </header>
            <p>
              I worked on this simply spices website as part of my final group
              project with Hack Your Future. I implemented the shopping
              functionality. This was my first project working in collaboration
              with other developers.
            </p>
            <ul className="tech-list">
              <li className="tech-list-item">HTML</li>
              <li className="tech-list-item">CSS</li>
              <li className="tech-list-item">React</li>
              <li className="tech-list-item">Node.Js</li>
              <li className="tech-list-item">Heroku</li>
              <li className="tech-list-item">Knex</li>
              <li className="tech-list-item">Javascript</li>
              <li className="tech-list-item">Swagger</li>
              <li className="tech-list-item">Storybook</li>
              <li className="tech-list-item">Postman</li>
              <li className="tech-list-item">Git</li>
              <li className="tech-list-item">Github</li>
            </ul>
            <ul className="actions special">
              <li className="view-sourse-text">
                <a href="https://github.com/HackYourFuture-CPH/fp-class20">
                  View source
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="meal-sharing-background">
          <div className="project-text">
            <header>
              <h2>meal sharing</h2>
            </header>
            <p>
              This was my personal project from Hack Your Future. You can see
              the menu , reseravtions, reviews and contact info. you can search
              meal , add meal and delete meal. I developed the front end, then
              the database using MYSQL, and finally the routers.
            </p>

            <ul className="tech-list">
              <li className="tech-list-item">HTML</li>
              <li className="tech-list-item">CSS</li>
              <li className="tech-list-item">React</li>
              <li className="tech-list-item">Node.Js</li>
              <li className="tech-list-item">Heroku</li>
              <li className="tech-list-item">Knex</li>
              <li className="tech-list-item">Javascript</li>
              <li className="tech-list-item">Git</li>
              <li className="tech-list-item">Github</li>
            </ul>
            <ul className="actions special">
              <li className="view-sourse-text">
                <a href="https://github.com/chunmeishui/meal-sharing">
                  View source
                </a>
              </li>
            </ul>
          </div>
          <div className="faster-game-pic-container">
            <a
              href="https://meal-sharing-chunmeishui.herokuapp.com/meals"
              class="image fit"
            >
              <img
                id="meal-main-picture"
                src={Meal}
                alt="meals of restaurant"
              />
            </a>
          </div>
        </article>
        <article className="weather-background">
          <div>
            <a href="https://htmlpreview.github.io/?https://github.com/chunmeishui/hyf-homework/blob/e0075377a3bc00cfb32886d39a707797ea5dd544/javascript/javascript3/week1/index.html">
              <img src={Weather} alt="spices web " />
            </a>
          </div>
          <div className="project-text">
            <header>
              <h2>Weather app</h2>
            </header>
            <p>
              I wrote this weather app in Javascript. I wanted the app to load
              with the user's current location's weather already loaded, so I
              had to figure out how to access the location of the user.you can
              also click the map to see th eposition of the user.
            </p>
            <ul className="tech-list">
              <li className="tech-list-item">HTML</li>
              <li className="tech-list-item">CSS</li>
              <li className="tech-list-item">Javascript</li>
              <li className="tech-list-item">Git</li>
              <li className="tech-list-item">Github</li>
            </ul>
            <ul className="actions special">
              <li className="view-sourse-text">
                <a href="https://github.com/chunmeishui/hyf-homework/tree/master/javascript/javascript3/week1">
                  View source
                </a>
              </li>
            </ul>
          </div>
        </article>
        <article className="faster-background">
          <div className="project-text">
            <header>
              <h2>Faster presser</h2>
            </header>
            <p>
              This is the press faster game. you can set the playing time and
              count the number of pressed letter.You will clearly know who is
              the winner. In this web you can also check the position and look
              at in the map.
            </p>
            <ul className="tech-list">
              <li className="tech-list-item">HTML</li>
              <li className="tech-list-item">CSS</li>
              <li className="tech-list-item">Javascript</li>
              <li className="tech-list-item">Git</li>
              <li className="tech-list-item">Github</li>
            </ul>
            <ul class="actions special">
              <li className="view-sourse-text">
                <a
                  href="https://github.com/chunmeishui/hyf-homework/tree/5b4a9081b298343a89127a056f10fc3d1eaad121/javascript/javascript2/week3"
                  class="button"
                >
                  View source
                </a>
              </li>
            </ul>
          </div>
          <div className="faster-game-pic-container">
            <a
              href="https://htmlpreview.github.io/?https://github.com/chunmeishui/hyf-homework/blob/master/javascript/javascript2/week3/index.html"
              // class="image fit"
            >
              <img src={Faster} alt="game " />
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
