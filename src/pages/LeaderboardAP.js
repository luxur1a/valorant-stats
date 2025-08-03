import { React, useEffect, useState } from "react";
import CardList from "../components/CardList";
import "./LeaderboardAP.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LeaderboardAP() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/valorant/v3/leaderboard/ap/pc", {
        headers: {
          Authorization: "HDEV-f555a675-8c3c-4bab-bf01-cbcfdfe902b8", // Replace with your actual API key
        },
      })
      .then((response) => {
        // response.data is { status, data: [ … ] }
        const entries = response.data.data.players;
        console.log("entries array:", entries);
        setData(entries);
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
        <h2>Loading…</h2>
      </div>
    );
  }

  return (
    <div className="leaderboard-wrapper">
      <h1>EU Leaderboard</h1>
      {Array.isArray(data) &&
        data.slice(0, 100).map((item, index) => (
          <NavLink
            className="navlink"
            key={index}
            to={`/leaderboard/ap/${item.name}/${item.tag}`}
            onClick={() => navigate(`/leaderboard/ap/${item.name}/${item.tag}`)}
          >
            <CardList
              PlayerCardID={item.card}
              gameName={item.name}
              tagLine={item.tag}
              leaderboardRank={item.leaderboard_rank}
              rankedRating={item.rr}
            />
          </NavLink>
        ))}
    </div>
  );
}

export default LeaderboardAP;
