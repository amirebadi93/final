import React from "react";
import Header from "./Components/Header";
import "./Portfolio.css";
import "./Styles/Global.css";
import Divider from "./assets/img/Divider.png";
import Design from "./assets/Icons/icons8-design-64.png";
import Development from "./assets/Icons/icons8-development-64.png";
import Maintenance from "./assets/Icons/icons8-laptop-settings-50.png";
import Iconhtml from "./assets/Icons/icons8-html5-48.png";
import Iconcss from "./assets/Icons/icons8-css-48.png";
import Iconjs from "./assets/Icons/icons8-javascript-48.png";
import Iconreact from "./assets/Icons/icons8-react-24.png";
import Iconnode from "./assets/Icons/icons8-nodejs-48.png";
import Icongit from "./assets/Icons/icons8-git-48.png";
import Iconfig from "./assets/Icons/icons8-figma-48.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);

function Portfolio() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="hero">
        <div className="white">
          <div className="Hero-container">
            <div className="Hero-About-me">
              <div>- I Am</div>
              <h1>AmirHossein Ebadi</h1>
              <div>
                <h3>Web Designer;</h3>
                <p>Front-End Developer</p>
                <p>if you want to learn more about me, just click below</p>
                <form action="./About Me.html">
                  <button className="learnmore-button">Learn More</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="black">
          <div className="backgroundimage" />
        </div>
      </div>
      <div className="black-divider" />
      <div className="Info">
        <div className="container">
          <div className="About-me-title">
            <h1>ABOUT ME</h1>
          </div>
          <p className="About-me-text">
            Recently diving into front-end development, I've built a solid
            foundation in HTML, CSS, React, and Vite—driven by genuine passion
            and curiosity. Through inspiring projects and continuous learning, I
            aim to bring creativity, reliability, and positive energy to every
            collaboration.
          </p>
        </div>
        <div className="container">
          <div className="section-divider">
            <img src={Divider} alt="Divider" className="divider-img" />
          </div>
        </div>
        <div className="container">
          <div className="explore">
            <div className="Explore-Header">
              <h3>Explore</h3>
            </div>
            <div className="Explore-items-Holder">
              <div className="Design Relative Explore-items">
                <div className="Explore-item-img Absolute">
                  <img src={Design} alt="Design" />
                </div>
                <h1 className="Explore-header">Design</h1>
                <p className="Explore-text">
                  I design sleek, responsive websites with a focus on clean
                  visuals and user-friendly layouts. Every element is crafted to
                  be both functional and visually engaging.
                </p>
              </div>
              <div className="Development Relative Explore-items">
                <div className="Explore-item-img Absolute">
                  <img src={Development} alt="Development" />
                </div>
                <h1 className="Explore-header">Development</h1>
                <p className="Explore-text">
                  I'm skilled in front-end development and web design, blending
                  clean code with sleek UI/UX to craft responsive, modern, and
                  user-focused digital experiences.
                </p>
              </div>
            </div>
            <div className="Maintenance Relative Explore-items">
              <div className="Explore-item-img Absolute">
                <img src={Maintenance} alt="Maintenance" />
              </div>
              <h1 className="Explore-header">Maintenance</h1>
              <p className="Explore-text">
                I'm proficient in front-end and web design maintenance, ensuring
                smooth updates, optimal UI/UX, bug fixes, and site performance
                for seamless user experiences
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Skills">
        <div className="container">
          <div className="Skills-header">
            <h1>Skills</h1>
          </div>
          <div className="Skills-holder flex">
            <div className="Using">
              <div className="Using-header">
                <h1>using now:</h1>
              </div>
              <div className="Using-icons flex">
                <div className="Using-item">
                  <img src={Iconhtml} alt="HTML" className="Using-icon" />
                  <span>HTML</span>
                </div>
                <div className="Using-item">
                  <img src={Iconcss} alt="CSS" className="Using-icon" />
                  <span>CSS</span>
                </div>
                <div className="Using-item">
                  <img src={Iconjs} alt="JavaScript" className="Using-icon" />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
