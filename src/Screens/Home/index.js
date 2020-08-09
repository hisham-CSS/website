import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Footer from "../../Component/Footer";

import RRIcon from "../../Assets/rocket/RR_Button.png";
import ShifterLogo from "../../Assets/shifter/SHIFTER_Button.png";
import logo from "../../Assets/catsplat/CatSplatLogo_DARK.png";

const Home = (props) => {
  const goTo = (url) => {
    props.history.push(url);
  };

  return (
    <div className="homeBox">
      <img src={logo} alt="logo" className="homeLogo" />
      <p className="homePara">
        We are an indie game studio from Toronto developing fun and exciting
        games
      </p>
      <div className="circlesContainer">
        <div className="circles">
          <img
            alt="Codename: Shifter"
            src={ShifterLogo}
            onClick={() => {
              goTo(process.env.PUBLIC_URL + "/shifter");
            }}
          />
          <h3>Codename: Shifter</h3>
        </div>
        <div className="circles">
          <img
            alt="Rocket Recover"
            src={RRIcon}
            onClick={() => {
              goTo(process.env.PUBLIC_URL + "/rocket");
            }}
          />
          <h3>Rocket Recover</h3>
        </div>
      </div>
      <Link to={process.env.PUBLIC_URL + "/about"} className="leanLink">
        <h4>MEET THE TEAM</h4>
      </Link>
      <div className="footBox">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
