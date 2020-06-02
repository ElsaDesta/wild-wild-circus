import React, { Component } from "react";
import "../StyleSheets/global.scss";
import "../StyleSheets/navbar.scss";
import {Link} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return <div className="navbar">
        <Link className="nav--item" to="/">WC</Link>
        <Link className="nav--item" to="/acts">Acts</Link>
        <Link className="nav--item" to="/artists">Artists</Link>
        <Link className="nav--item" to="/tickets">Tickets</Link>
    </div>;
  }
}
