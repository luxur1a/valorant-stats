import React from "react";
import "./LeaderboardLanding.css";

function LeaderboardLanding() {
  return (
    <div className="leaderboard-landing-wrapper">
      <h1>Choose Region.</h1>
      <div className="leaderboard-landing-buttons">
        <a href="./leaderboard/na" className="btn-leaderboard-na">
          North America
        </a>
        <a href="./leaderboard/eu" className="btn-leaderboard-eu">
          European Union
        </a>
        <a href="./leaderboard/ap" className="btn-leaderboard-ap">
          Asia Pacific
        </a>
      </div>
    </div>
    
  );
}

export default LeaderboardLanding;
