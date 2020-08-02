import React, { Component } from "react";
import woman from "../images/woman.jpg";
import "../StyleSheets/card.scss";
import redCostume from "../images/redCostume.jpg";
import glitter from "../images/glitter.jpg";

export default class Card extends Component {
  render() {
    return (
      <div className="card--wrapper">
        <img
          className="costume"
          src={this.props.imagepath}
          alt="a person dressed in costume"
        />

        <div className="card--text">
          <h3 className="card--header">{this.props.title}</h3>
          <p className="card--detail">{this.props.detail}</p>
          <p>Get tickets</p>
        </div>
      </div>
    );
  }
}
