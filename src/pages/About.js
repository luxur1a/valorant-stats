import React from "react";
import "./About.css";

function About() {
  return (
    <div className="homepage-wrapper">
      <h1>Made with Love.</h1>
      <div className="subtitle">
        This app is created to complete
        <br />
        Mobile Device Programming Lab class.
      </div>
      <img className="img" src="/images/gilang.jpg" alt=""></img>
      <h2>Benediktus Gilang Widhiatmoko</h2>
      <div>
        Diponegoro University
        <br />
        Faculty of Engineering
        <br />
        Computer Engineering
      </div>
      <div>21120119130104</div>

      <br />
    </div>
  );
}

export default About;
