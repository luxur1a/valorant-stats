import "./CardProfile.css";

export default function CardProfile({
  img,
  name,
  tag,
  level,
  tier,
  elo,
}) {
  return (
      
    <div className="profile-body">
      <img
        className="profileCard"
        src={img}
        alt=""
      />

      <div className="profile-description">
        <div className="p-name">{name}</div>
        <div className="p-tag">#{tag}</div>
        <p>Account Level</p>
        <div className="p-level">{level}</div>
        <p>Rank</p>
        <div className="p-rr">{tier}</div>
        <p>ELO</p>
        <div className="p-elo">{elo}</div>
      </div>
    </div>
  );
}
