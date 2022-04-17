import React, { Component } from "react";

export default class IntroSection extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="intro">
        <h3 className="intro-title">{title}</h3>
        <i className="fa-light fa-hyphen" />
        <i className="fa-thin fa-glasses" />
        <i className="fa-light fa-hyphen" />
        <p className="intro-text">{text}</p>
      </div>
    );
  }
}
