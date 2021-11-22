import { React, useEffect, useState } from "react";
import CardList from "../components/CardList";
import "./LeaderboardAP.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function LeaderboardAP(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { history } = props;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.henrikdev.xyz/valorant/v1/leaderboard/ap")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="detail-wrapper">
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <>
      <div className="leaderboard-wrapper">
        <h1>NA Leaderboard </h1>
        {data
          .filter((i, idx) => idx < 100)
          .map((item, index) => (
            <NavLink
              className="navlink"
              key={index}
              to={`/leaderboard/ap/${item.gameName}/${item.tagLine}`}
              onClick={() =>
                history.push(`/leaderboard/ap/${item.gameName}/${item.tagLine}`)
              }
            >
              <CardList
                PlayerCardID={item.PlayerCardID}
                gameName={item.gameName}
                tagLine={item.tagLine}
                leaderboardRank={item.leaderboardRank}
                rankedRating={item.rankedRating}
              />
            </NavLink>
          ))}
      </div>
    </>
  );
}

export default LeaderboardAP;
