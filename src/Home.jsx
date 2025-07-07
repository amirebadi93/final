import React from "react";
import Header from "./Components/Header";
import "./Home.css";
import Facebook from "./assets/Icons/icons8-facebook-100.png";
import X from "./assets/Icons/icons8-x-100.png";
import Instagram from "./assets/Icons/icons8-instagram-100.png";
import Youtube from "./assets/Icons/icons8-youtube-100.png";
function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="About-me">
          <div>- I Am</div>
          <h1>AmirHossein Ebadi</h1>
          <div>
            <h3>Web Designer;</h3>
            <p>This is my preview web page.</p>
            <p>if you want to learn more about me, just click below</p>
            <form action="./About Me.html">
              <button className="learnmore-button">Learn More</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="social inline">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={X} alt="X" />
          <img src={Youtube} alt="Youtube" />
        </div>
        <div className="form-container right inline width50">
          <div className="subscribe inline center">
            Subscribe to newsletter:
            <form action="">
              <input type="email" placeholder="E-Mail" />
              <button className="subscribe-button">subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div>A.E Design MediaCraft Company - All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
