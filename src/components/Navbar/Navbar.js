import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbaritems">
        <div className="menu-icon">
          <img src="/images/logo.png" alt=""></img>
        </div>
        <h1 className="navbar-title">
          <a href="../homepage">VALORANT Stats</a>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
