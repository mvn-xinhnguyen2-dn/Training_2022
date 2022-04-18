import React, { Component } from "react";
import SuggestItem from "./SuggestItem";

export default class Suggest extends Component {
  render() {
    let mostReviewItem = [
      {
        id: 1,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-01.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg",
        name: "Vintage Aviator Sunglasses",
        price: 155.0,
      },
      {
        id: 2,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-02.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-15.jpg",
        name: "Miu Miu/Core Collection MU 08RS",
        price: 450.0,
      },
      {
        id: 3,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-03.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-16.jpg",
        name: "Miu Miu/Core Collection MU 59US",
        price: 155.0,
      },
    ];
    let topRateItem = [
      {
        id: 4,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-01.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg",
        name: "Vintage Aviator Sunglasses",
        price: 155.0,
      },
      {
        id: 5,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-02.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-15.jpg",
        name: "Miu Miu/Core Collection MU 08RS",
        price: 450.0,
      },
      {
        id: 6,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-03.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-16.jpg",
        name: "Miu Miu/Core Collection MU 59US",
        price: 155.0,
      },
    ];
    let recentItem = [
      {
        id: 7,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-01.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg",
        name: "Vintage Aviator Sunglasses",
        price: 155.0,
      },
      {
        id: 8,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-02.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-15.jpg",
        name: "Miu Miu/Core Collection MU 08RS",
        price: 450.0,
      },
      {
        id: 9,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-03.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-16.jpg",
        name: "Miu Miu/Core Collection MU 59US",
        price: 155.0,
      },
    ];
    let popularItem = [
      {
        id: 10,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-01.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-14.jpg",
        name: "Vintage Aviator Sunglasses",
        price: 155.0,
      },
      {
        id: 11,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-02.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-15.jpg",
        name: "Miu Miu/Core Collection MU 08RS",
        price: 450.0,
      },
      {
        id: 12,
        link: "https://themes.the4.co/kalles-html/product-detail-layout-03.html",
        img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-16.jpg",
        name: "Miu Miu/Core Collection MU 59US",
        price: 155.0,
      },
    ];
    let element1 = mostReviewItem.map((item, index) => {
      return (
        <li className="suggest-item" key={index}>
          <SuggestItem
            link={item.link}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        </li>
      );
    });
    let element2 = topRateItem.map((item, index) => {
      return (
        <li className="suggest-item" key={index}>
          <SuggestItem
            link={item.link}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        </li>
      );
    });
    let element3 = recentItem.map((item, index) => {
      return (
        <li className="suggest-item" key={index}>
          <SuggestItem
            link={item.link}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        </li>
      );
    });
    let element4 = popularItem.map((item, index) => {
      return (
        <li className="suggest-item" key={index}>
          <SuggestItem
            link={item.link}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        </li>
      );
    });

    return (
      <section className="section-suggest">
        <div className="container wrap">
          <div className="col-lg-3">
            <p className="suggest-name">MOST REVIEW</p>
            <ul className="suggest-list">{element1}</ul>
          </div>
          <div className="col-lg-3">
            <p className="suggest-name">TOP RATE</p>
            <ul className="suggest-list">{element2}</ul>
          </div>
          <div className="col-lg-3">
            <p className="suggest-name">RECENT ITEMS</p>
            <ul className="suggest-list">{element3}</ul>
          </div>
          <div className="col-lg-3">
            <p className="suggest-name">POPULAR ITEMS</p>
            <ul className="suggest-list">{element4}</ul>
          </div>
        </div>
      </section>
    );
  }
}
