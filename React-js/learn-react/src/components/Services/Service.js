import React, { Component } from "react";
import ServiceItem from "./ServiceItem";

export default class Service extends Component {
  render() {
    let services = [
      {
        id: 1,
        icon: "fa-light fa-truck",
        title: "FREE SHIPPING UK&UK",
        text: "Free shipping on all orders above $1",
      },
      {
        id: 2,
        icon: "fa-light fa-headphones",
        title: "SUPPORT 24/7",
        text: "Contact us 24 hours a day, 7 days a we",
      },
      {
        id: 3,
        icon: "fa-light fa-circle-dollar-to-slot",
        title: "30 DAYS MONEY BACK",
        text: "Simply return it within 30 days for an exchange.",
      },
    ];
    let element = services.map((service, index) => {
      return (
        <li className="services-item col-lg-4" key={index}>
          <ServiceItem
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        </li>
      );
    });
    return (
      <section className="section-services">
        <div className="container">
          <ul className="services-list wrap">{element}</ul>
        </div>
      </section>
    );
  }
}
