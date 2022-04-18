import React, { Component } from "react";

export default class ServiceItem extends Component {
  render() {
    const { icon, title, text } = this.props;
    return (
      <>
        <i className={icon} />
        <h3 className="title services">{title}</h3>
        <p className="services-text">{text}</p>
      </>
    );
  }
}
