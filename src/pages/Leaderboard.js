import { React, useEffect, useState } from "react";
import CardList from "../components/CardList";
import "./Leaderboard.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Leaderboard(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { history } = props;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.henrikdev.xyz/valorant/v2/leaderboard/na")
      .then((response) => {
        console.log(response.data.players);
        setData(response.data.players);
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
        <h1> </h1>
        {data
          .filter((i, idx) => idx < 100)
          .map((item, index) => (
            <NavLink
              className="navlink"
              key={index}
              to={`/leaderboard/na/${item.gameName}/${item.tagLine}`}
              onClick={() =>
                history.push(`/leaderboard/na/${item.gameName}/${item.tagLine}`)
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

export default Leaderboard;
