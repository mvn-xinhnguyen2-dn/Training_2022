import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    return (
      <section className="section-slide">
        <div className="container-fluit">
          {/* 3 slide show  */}
          <div id="slide-fisrt" className="slide-show">
            <img
              src="https://themes.the4.co/kalles-html/assets/images/home-glasses/slide-01.jpg"
              alt=""
            />
            <div className="slide-content">
              <h2 className="slide-title">SUMMER CLEARANCE</h2>
              <p>Code Z7922G8 to Get 25% OFF</p>
              <a className="btn primary" href="./index.html">
                SHOP NOW
              </a>
              <a className="btn nocolor" href="./index.html">
                {" "}
                VIEW PROMOTION
              </a>
            </div>
          </div>
          <ul className="slide-pagination">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
