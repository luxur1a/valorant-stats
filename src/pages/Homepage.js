import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage-wrapper">
      <h1>Welcome to VALORANT-Stats.</h1>
      <div className="homepage-buttons">
        <a href="./leaderboard" className="btn">
          Leaderboard
        </a>
        <a href="./profile" className="btn">
          Profile
        </a>
        <a href="./about" className="btn-about">
          About
        </a>
      </div>
      <div className="pic">
        <img src="/images/Phoenix.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage;
