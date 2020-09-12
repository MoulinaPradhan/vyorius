import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="logo">
            <img src="https://vyorius.com/static/media/logo1.2bce0cc3.png" />
            <span id="logo-text">Vyorius</span>
          </div>
          <div className="nav-links">Why Vyorius?</div>
          <div className="nav-links">Solutions</div>
          <div className="nav-links">Products</div>
          <div className="nav-links">Use Cases</div>
          <div className="nav-links">Team</div>
          <div className="nav-links">Partner</div>
          <div className="nav-links">Contact Us</div>

          <button id="nav-launch">Launch Vyorius ></button>
        </div>
      </div>
    );
  }
}

export default Navbar;
