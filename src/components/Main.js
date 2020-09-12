import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <div id="left-blog">
          <p id="heading">CONNECTING THE DISCONNECTED</p>
          <p style={{ fontSize: 45, fontWeight: 700 }}>
            <span>Vyorius</span> brings unmanned robots <span>together</span>,
            wherever they are
          </p>
          <p style={{ fontSize: 20, fontWeight: 500, marginTop: -20 }}>
            With all of the operations, commanding and maintenance tools in one
            place, unmanned vehicles will stay connected and productive no
            matter where you’re Delivering
          </p>
          <button
            className="main-btn"
            style={{
              backgroundColor: "#ff914d",
              color: "white",
              marginRight: 10,
            }}
          >
            Try Vyorius
          </button>
          <button className="main-btn" style={{ color: "#ff914d" }}>
            Learn More
          </button>
          <p style={{ fontWeight: 600 }}>
            Need to order a delivery?
            <span style={{ color: "blue", textDecoration: "underline" }}>
              GetStarted
            </span>
          </p>
        </div>
        <div id="right-blog">
          <img
            src="https://vyorius.com/static/media/8.10880914.png"
            id="main-image"
            alt="Vyorius-collection"
          />
        </div>
      </div>
    );
  }
}

export default Main;
