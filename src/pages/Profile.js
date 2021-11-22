import React, { useState } from "react";
import axios from "axios";
import CardProfile from "../components/CardProfile";
import "./Profile.css";

function Profile() {
  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  const [show, setShow] = useState(false);

  const [username, setUsername] = useState("");
  const [tag, setTag] = useState("");
  const [region, setRegion] = useState("AP");
  const [data, setData] = useState({});
  const [profile, setProfile] = useState({});

  const doSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.henrikdev.xyz/valorant/v1/account/" + username + "/" + tag
      )
      .then((response) => {
        console.log(response.data.data);
        setProfile(response.data.data);
      });
    axios
      .get(
        "https://api.henrikdev.xyz/valorant/v1/mmr/" +
          region +
          "/" +
          username +
          "/" +
          tag
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setShow(true);
      });
  };

  return (
    <div className="homepage-wrapper">
      <h1>Check your PROFILE.</h1>
      <br />
      <div>
        <form onSubmit={doSearch}>
          <div className="form-body">
            <div className="form">
              <label>Username </label>
              <br />
              <input
                className="input"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="form">
              <label>Tag</label>
              <br />
              <label># </label>
              <input
                className="input"
                type="text"
                name="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              ></input>
            </div>
            <div className="form">
            <label>Region </label>
              <br />
              <select
                className="select"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="ap">AP</option>
                <option value="eu">EU</option>
                <option value="na">NA</option>
              </select>
            </div>
            <div>
            <input className="btn-profile" type="submit" name="submit"></input>
            </div>
          </div>
        </form>
      </div>
      {show && (
        <CardProfile
          img={profile.card.wide}
          name={data.name}
          tag={data.tag}
          level={profile.account_level}
          tier={data.currenttierpatched}
          elo={data.elo}
        />
      )}
    </div>
  );
}

export default Profile;
