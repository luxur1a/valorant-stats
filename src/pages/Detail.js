import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProfile from "../components/CardProfile";
import "./Detail.css";
import { useParams } from "react-router";

function Profile() {
  const [profile, setProfile] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const { region, itemUsername, itemTagline } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/valorant/v1/account/${itemUsername}/${itemTagline}`, {
        headers: {
          Authorization: "HDEV-f555a675-8c3c-4bab-bf01-cbcfdfe902b8",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setProfile(response.data.data);
      });
    axios
      .get(`/api/valorant/v1/mmr/${region}/${itemUsername}/${itemTagline}`, {
        headers: {
          Authorization: "HDEV-f555a675-8c3c-4bab-bf01-cbcfdfe902b8",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      });
  }, [region, itemUsername, itemTagline]);

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
