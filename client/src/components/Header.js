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
          <Link to="/acts">
            <img className="home--icon" src={home} alt="next icon" />{" "}
          </Link>
        </div>
      </div>
    );
  }
}
