import React, { Component } from "react";
import BannerImage from "./BannerImage";

export default class Banner extends Component {
  render() {
    return (
      <section className="section-model-image">
        <div className="container">
          <ul className="model-list wrap">
            <BannerImage
              link="https://themes.the4.co/kalles-html/shop.html"
              img="https://themes.the4.co/kalles-html/assets/images/home-glasses/banner-01.jpg"
              text="MEN’S EYEWEAR"
            />
            <BannerImage
              link="https://themes.the4.co/kalles-html/shop.html"
              img="https://themes.the4.co/kalles-html/assets/images/home-glasses/banner-02.jpg"
              text="WOMEN’S EYEWEAR"
            />
          </ul>
        </div>
      </section>
    );
  }
}
