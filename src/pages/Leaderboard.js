import { React, useEffect, useState} from "react";
import CardList from "../components/CardList";
import "./Leaderboard.css";
import axios from "axios";

function Leaderboard() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.henrikdev.xyz/valorant/v1/leaderboard/na")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      });
  }, []);

    if (loading) {
      return <p>Data is loading...</p>;
    }


  return (
    <>
      <div className="leaderboard-wrapper">
        <h1>NA Leaderboard </h1>
        {data.filter((i, idx) => idx <100).map((item, index) => (
          <CardList
            key={index}
            PlayerCardID={item.PlayerCardID}
            gameName={item.gameName}
            tagLine={item.tagLine}
            leaderboardRank={item.leaderboardRank}
            rankedRating={item.rankedRating}
          />
        ))}
      </div>
    </>
  );
}

export default Leaderboard;
