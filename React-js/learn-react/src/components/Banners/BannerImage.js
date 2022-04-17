import React, { Component } from "react";

export default class BannerImage extends Component {
  render() {
    const { link, img, text } = this.props;
    return (
      <li className="model-item col-lg-6">
        <a href={link}>
          <img src={img} alt="" />
          <div className="model-text">
            <p className="item-shape">The classic aviator</p>
            <p className="item-kind">{text}</p>
          </div>
        </a>
      </li>
    );
  }
}
