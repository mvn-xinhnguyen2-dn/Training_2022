import React, { Component } from "react";

export default class SuggestItem extends Component {
  render() {
    const { link, img, name, price } = this.props;
    return (
      <>
        <a href={link}>
          <img src={img} alt={name} />
          <div>
            <h4 className="product-name">{name}</h4>
            <p className="product-price">${price}</p>
          </div>
        </a>
      </>
    );
  }
}
