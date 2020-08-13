import React, { Component } from "react";
import "../StyleSheets/card.scss";


export default class Card extends Component {
  render() {
    return (
      <div className="card--wrapper">

        <img
          className="costume"
          src={this.props.imagepath}
          alt="act"
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
