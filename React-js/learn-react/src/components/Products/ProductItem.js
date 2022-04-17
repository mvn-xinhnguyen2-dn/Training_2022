import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { link, img, name, price } = this.props;
    return (
      <>
        <a href={link} className="item-detail">
          <img src={img} alt="" />
          <span className="quick-link"></span>
          <h4 className="product-name">{name}</h4>
          <p className="product-price">$ {price.toFixed(2)}</p>
          <ul className="product-color">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </a>
      </>
    );
  }
}
