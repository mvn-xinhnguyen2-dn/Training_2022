import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-page">
        <div className="container">
          <div className="footer-top wrap">
            <div className="footer-info col-lg-3">
              <ul className="info">
                <li>
                  <a className="footer-logo" href="./index.html">
                    <img
                      src="https://themes.the4.co/kalles-html/assets/images/home-glasses/footer-logo.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="info-item">
                  <i className="fa-solid fa-hyphen"></i>
                  <span> 184 Main Rd E, St Albans VIC 3021, Australia</span>
                </li>
                <li className="info-item">
                  <i className="fa-solid fa-hyphen"></i>
                  <span>contact@company.com</span>
                </li>
                <li className="info-item">
                  <i className="fa-solid fa-hyphen"></i>
                  <span>+001 2233 456</span>
                </li>
                <li className="info-item">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </li>
              </ul>
            </div>
            <ul className="footer-nav-list col-lg-13">
              <li>
                <h4 className="footer-title">Categories</h4>
              </li>
              <li>
                <a href="./index.html">Celebrations</a>
              </li>
              <li>
                <a href="./index.html">Events</a>
              </li>
              <li>
                <a href="./index.html">Home Decor</a>
              </li>
              <li>
                <a href="./index.html">Seasonal Bouquet</a>
              </li>
              <li>
                <a href="./index.html">Wedding Decor</a>
              </li>
            </ul>
            <ul className="footer-nav-list col-lg-13">
              <li>
                <h4 className="footer-title">Useful links</h4>
              </li>
              <li>
                <a href="./index.html">Contact us</a>
              </li>
              <li>
                <a href="./index.html">Privacy Policy</a>
              </li>
              <li>
                <a href="./index.html">Shipping & Delivery</a>
              </li>
              <li>
                <a href="./index.html">Terms & Conditions</a>
              </li>
              <li>
                <a href="./index.html">Returns & Exchanges</a>
              </li>
            </ul>
            <div className="signup col-lg-4">
              <li>
                <h4 className="footer-title">Newsletter Signup</h4>
              </li>
              <p>
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
              <form className="form-subscribe" action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your email address"
                />
                <button className="btn submit" type="submit">
                  Subscribe
                </button>
              </form>
              <div className="pay-list">
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
                <img
                  src="https://themes.the4.co/kalles-html/assets/images/home-glasses/payment-01.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="footer-top-responsive">
            <ul className="nav-responsive">
              <li>
                <a href="./index.html"> Get intouch</a>
              </li>
              <li>
                <a href="./index.html"> Categories</a>
              </li>
              <li>
                <a href="./index.html"> Useful link</a>
              </li>
              <li>
                <a href="./index.html"> Newsletter signup</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-item">
              <p>
                Copyright © 2021 <span>Kalles</span> all rights reserved.
                Powered by The4
              </p>
              <ul className="footer-menu">
                <li>
                  <a href="./index.html">Shop</a>
                </li>
                <li>
                  <a href="./index.html">About Us</a>
                </li>
                <li>
                  <a href="./index.html">Contact Us</a>
                </li>
                <li>
                  <a href="./index.html">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
