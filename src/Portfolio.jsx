import React from "react";
import Header from "./Components/Header";
import "./Portfolio.css";
import "./Styles/Global.css";
import Divider from "./assets/img/Divider.png";
import Design from "./assets/Icons/icons8-design-64.png";
import Development from "./assets/Icons/icons8-development-64.png";
import Maintenance from "./assets/Icons/icons8-laptop-settings-50.png";
import Iconhtml from "./assets/Icons/HTML.png";
import Iconcss from "./assets/Icons/CSS.png";
import Iconjs from "./assets/Icons/JavaScript.png";
import Iconreact from "./assets/Icons/icons8-react-24.png";
import Iconnode from "./assets/Icons/icons8-nodejs-48.png";
import Icongit from "./assets/Icons/icons8-git-48.png";
import Iconfig from "./assets/Icons/icons8-figma-48.png";
import Iconblend from "./assets/Icons/icons8-microsoft-blend-240.png";
import Iconbootstrap from "./assets/Icons/icons8-bootstrap-240.png";
import Iconenglish from "./assets/Icons/icons8-english-96.png";
import IconMicrosoft from "./assets/Icons/icons8-microsoft-240.png";
import Iconcrm from "./assets/Icons/icons8-microsoft-dynamics-365-240.png";
import Iconvm from "./assets/Icons/icons8-vmware-100.png";
import Iconnetwork from "./assets/Icons/icons8-networking-manager-94.png";
import Iconvoip from "./assets/Icons/icons8-voip-100.png";
import Aboutbackgoround from "./assets/img/dried-leaves-gray-blank-background.jpg";
import Itemport1 from "./assets/img/screenshot-1752267044170.png";
import Itemport2 from "./assets/img/port2.png";
import Itemport3 from "./assets/img/port3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
              <h1>Explore</h1>
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
                <div className="Using-item">
                  <img
                    src={Iconreact}
                    alt="JavaScript"
                    className="Using-icon"
                  />
                  <span>React</span>
                </div>
                <div className="Using-item">
                  <img src={Icongit} alt="JavaScript" className="Using-icon" />
                  <span>Git</span>
                </div>
              </div>
            </div>

            <div className="Learning">
              <div className="Learning-header">
                <h1>LEARNING:</h1>
              </div>
              <div className="Learning-icons flex">
                <div className="Learning-item">
                  <img src={Iconnode} alt="HTML" className="Learning-icon" />
                  <span>NodeJS</span>
                </div>
                <div className="Learning-item">
                  <img src={Iconfig} alt="CSS" className="Learning-icon" />
                  <span>Figma</span>
                </div>
                <div className="Learning-item">
                  <img src={Iconblend} alt="CSS" className="Learning-icon" />
                  <span>Microsoft Blend</span>
                </div>
                <div className="Learning-item">
                  <img
                    src={Iconbootstrap}
                    alt="CSS"
                    className="Learning-icon"
                  />
                  <span>Bottstrap</span>
                </div>
              </div>
            </div>

            <div className="Other-skills">
              <div className="Other-header">
                <h1>OTHER SKILLS:</h1>
              </div>
              <div className="Other-icons flex">
                <div className="Other-item">
                  <img src={Iconenglish} alt="HTML" className="Other-icon" />
                  <span>English</span>
                </div>
                <div className="Other-item">
                  <img src={IconMicrosoft} alt="CSS" className="Other-icon" />
                  <span>MCSE</span>
                </div>
                <div className="Other-item">
                  <img src={Iconcrm} alt="CSS" className="Other-icon" />
                  <span>Microsoft Dynamic</span>
                </div>
                <div className="Other-item">
                  <img src={Iconvm} alt="CSS" className="Other-icon" />
                  <span>VMware</span>
                </div>
                <div className="Other-item">
                  <img src={Iconnetwork} alt="CSS" className="Other-icon" />
                  <span>Networking</span>
                </div>
                <div className="Other-item">
                  <img src={Iconvoip} alt="CSS" className="Other-icon" />
                  <span>Issabel VOIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Portfolio">
        <div className="Portfolio-header">
          <div className="Portfolio-title-holder">
            <div className="Portfolio-title">
              <h1>PORTFOLIO</h1>
            </div>
          </div>
        </div>
        <div className="port-header-text">
          <h1>WEB DESIGNS</h1>
        </div>
        <div className="Portfolio-items flex">
          <div className="Portfolio-item port1">
            <img src={Itemport1} alt="" />
          </div>
          <div className="Portfolio-item port2">
            <img src={Itemport2} alt="" />
          </div>
          <div className="Portfolio-item port3">
            <img src={Itemport3} alt="" />
          </div>
        </div>
      </div>
      <div className="port-footer">
        <h1>And many more to come!</h1>
      </div>
      <div className="contact-holder">
        <div className="container">
          <div className="contact flex">
            <div className="contact-header">
              <div className="contact-title-holder">
                <div className="contact-title">
                  <h1>Contact</h1>
                </div>
                <div className="contact-text">
                  <p>
                    fill the form below and send your message. <br />
                    I will get back to you as soon as possible!
                  </p>
                </div>
              </div>
            </div>
            <form action="" className="contact-form">
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Enter your name"
              />
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Enter your Email"
              />
              <input
                type="tel"
                name="Phone"
                id="Phone"
                placeholder="Enter your phone number"
              />
              <textarea
                name="Message"
                id="Message"
                placeholder="Enter your message"
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-items">
          <div className="footer-item">
            <FontAwesomeIcon className="" icon={faChevronUp} />
            <br />
            <a href="#top" className="back-to-top">
              BACK TO TOP
            </a>
          </div>
          <p className="footer-item">
            © 2025 Amirhossein Ebadi ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
