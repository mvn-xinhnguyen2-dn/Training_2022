import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header-page">
        <div className="header-top">
          <span />
          <a href="./public/index.html">
            Today deal sale off <span>70%</span> . End in{" "}
            <span>00 days 00:00:00</span>. Hurry Up{" "}
            <i className="fa-thin fa-arrow-right" />
          </a>
          <button className="btn close">-Close</button>
        </div>
        <nav className="header-nav">
          <a className="brand-logo" href="./public/index.html">
            <img
              src="https://themes.the4.co/kalles-html/assets/images/svg/kalles.svg"
              alt=""
            />
          </a>
          <a className="menu-logo" href="./public/index.html">
            <img
              src="https://icon-library.com/images/menu-icon/menu-icon-14.jpg"
              alt=""
            />
          </a>
          <ul className="header-menu-list">
            <li className="menu-nav-item">
              <a href="./public/index.html">Demo</a>
            </li>
            <li className="menu-nav-item">
              <a href="./public/index.html">Shop</a>
            </li>
            <li className="menu-nav-item">
              <a href="./public/index.html">Product</a>
            </li>
            <li className="menu-nav-item">
              <a href="./public/index.html">Sale</a>
            </li>
            <li className="menu-nav-item">
              <a href="./public/index.html">Portfolio</a>
            </li>
            <li className="menu-nav-item">
              <a href="./public/index.html">Lookbook</a>
            </li>
            <li className="menu-nav-item">
              <a href="./public/index.html">Blog</a>
            </li>
          </ul>
          <ul className="nav-icon-list">
            <li className="nav-icon">
              <i className="fa-thin fa-magnifying-glass" />
            </li>
            <li className="nav-icon">
              <i className="fa-thin fa-user" />
            </li>
            <li className="nav-icon">
              <i className="fa-thin fa-heart" />
            </li>
            <li className="nav-icon">
              <i className="fa-thin fa-cart-shopping" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
