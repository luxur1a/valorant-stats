import "./CardList.css";

export default function CardList({
  PlayerCardID,
  gameName,
  tagLine,
  leaderboardRank,
  rankedRating,
  onClick,
}) {
  return (
    <div className="card-body" onClick={onClick}>
      <div className="rank">{leaderboardRank}</div>

      <img
        className="pCard"
        src={
          "https://media.valorant-api.com/playercards/" +
          PlayerCardID +
          "/smallart.png"
        }
        alt=""
      />

      <div className="card-description">
        <div className="first-row">
          <div className="name">{gameName}</div>
          <div className="tag">#{tagLine}</div>
        </div>
        <div className="second-row">
          <div className="rr">RR : {rankedRating}</div>
        </div>
      </div>
    </div>
  );
}
