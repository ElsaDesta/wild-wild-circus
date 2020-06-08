import React, { Component } from "react";
import "../StyleSheets/header.scss";
import home from "../images/home-button.svg";
import "../StyleSheets/global.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header--wrapper">
        <div className="header--container">
          <h1 className="header--title">Welcome to Wild Circus</h1>
          <p className="header--text">
            We are a collective dedicated to creativity, inclusivity, and
            experimentalism. We created this virtual space to share our work and
            engage with our community.{" "}
          </p>
          <Link to="/acts">
            <img className="home--icon" src={home} alt="next icon" />{" "}
          </Link>
        </div>
      </div>
    );
  }
}
