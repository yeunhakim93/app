import React from "react";
import landingImg from "../assets/christin-hume-Hcfwew744z4-unsplash.jpg"

const LandingInfo = (props) => (
  <div className="landing-info-container">
    <img src={landingImg} className="landing-image"></img>
    <div className="caption">FROM THE CIRCUIT TO THE ENDPOINT AND EVERYTHING IN BETWEEN</div>
    <div className="caption-description">Welcome! This is the landing page for displaying information.</div>
  </div>
);

export default LandingInfo;
