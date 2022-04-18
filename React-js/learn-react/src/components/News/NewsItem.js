import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { link, img, title, time, content } = this.props;
    return (
      <>
        <a href={link}>
          <img src={img} alt="" />
          <h3 className="title-news">{title}</h3>
        </a>
        <span>
          On <time>{time}</time>
        </span>
        <p>{content}</p>
      </>
    );
  }
}
