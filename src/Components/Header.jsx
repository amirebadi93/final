import React from "react";
import Logo from "../assets/img/Logo.png";
function Header() {
  return <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-menu">
        <ul>
          <li className="menu-item menu-item-mainpage">Main Page</li>
          <li className="menu-item menu-item-portfolio">Portfolio</li>
          <li className="menu-item menu-item-aboutme">About Me</li>
          <li className="menu-item menu-item-contactme">Contact Me</li>
        </ul>
      </div>
    </header>;
}

export default Header;
