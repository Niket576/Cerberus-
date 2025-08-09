import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/passSys.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <div className="home-hello">
          <h1>Welcome to CEREBUS </h1>
          <h1>AUTHENTICATION SYSTEM</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
