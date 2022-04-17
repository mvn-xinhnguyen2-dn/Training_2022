import IntroSection from "../../componentsChild/IntroSection";
import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
        {
          id: 4,
          link: "https://themes.the4.co/kalles-html/product-detail-layout-04.html",
          img: "https://themes.the4.co/kalles-html/assets/images/home-glasses/pr-13.jpg",
          name: "Ray-Ban/Hexagonal Flat Lenses",
          price: 205.0,
        },
      ],
    };
  }
  render() {
    let element = this.state.products.map((product, index) => {
      let result = "";
      result = (
        <li className="product-item col-lg-3" key={index}>
          <ProductItem
            link={product.link}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        </li>
      );
      return result;
    });

    return (
      <section className="section-products">
        <div className="container">
          <IntroSection
            title="Our Products"
            text="Eyeglasses teamed up to design a performance cycling frame inspired by the
              French outfitter's ability to honor classic
              design while elevating technical capabilities."
          />
          <div className="products-colection">
            <ul className="products-colection-list">
              <li className="colection-item" id="">
                FEATURED
              </li>
              <li className="colection-item" id="">
                NEW ARRIVALS
              </li>
              <li className="colection-item" id="">
                ON SALE
              </li>
            </ul>
            <ul className="product-list wrap">{element}</ul>
          </div>
        </div>
      </section>
    );
  }
}
