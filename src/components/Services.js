import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free coktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, in!",
      },
      {
        icon: <FaHiking />,
        title: "free coktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, in!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free coktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, in!",
      },
      {
        icon: <FaBeer />,
        title: "free coktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, in!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article className="service" key={index}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
