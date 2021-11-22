import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProfile from "../components/CardProfile";
import "./Detail.css";
import { useParams } from "react-router";

function Profile() {
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  //   const [username, setUsername] = useState("");
  //   const [tag, setTag] = useState("");
  //   const [region, setRegion] = useState("AP");
  const [profile, setProfile] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const { region, itemUsername, itemTagline } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.henrikdev.xyz/valorant/v1/account/${itemUsername}/${itemTagline}`
      )
      .then((response) => {
        console.log(response.data.data);
        setProfile(response.data.data);
      });
    axios
      .get(
        `https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${itemUsername}/${itemTagline}`
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      });
  }, [itemUsername, itemTagline]);
  //   console.log(profile);
  //   console.log(data);

  if (loading) {
    return (
      <div className="detail-wrapper">
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div className="detail-wrapper">
      <h1>Check your PROFILE.</h1>
      <br />

      <CardProfile
        img={profile.card === undefined ? "..." : profile.card.wide}
        name={data === undefined ? "..." : data.name}
        tag={data === undefined ? "..." : data.tag}
        level={profile.account_level}
        tier={data === undefined ? "..." : data.currenttierpatched}
        elo={data === undefined ? "..." : data.elo}
      />
    </div>
  );
}

export default Profile;
