import { React, useEffect, useState } from "react";
import CardList from "../components/CardList";
import "./LeaderboardEU.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function LeaderboardEU(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { history } = props;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.henrikdev.xyz/valorant/v3/leaderboard/eu/pc", {
        headers: {
          Authorization: "HDEV-f555a675-8c3c-4bab-bf01-cbcfdfe902b8", // Replace with your actual API key
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Request failed:", error);
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
              to={`/leaderboard/eu/${item.gameName}/${item.tagLine}`}
              onClick={() =>
                history.push(`/leaderboard/eu/${item.gameName}/${item.tagLine}`)
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

export default LeaderboardEU;
