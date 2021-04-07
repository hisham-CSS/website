import "./style.css";
import React from "react";

import Card from "../../Component/Card";
import Footer from "../../Component/Footer";

import team from "../../Assets/team/team.jpg";
import vader from "../../Assets/team/vader.jpg";

import logo from "../../Assets/catsplat/CatSplatLogo_DARK.png";
const About = () => {
  return (
    <div className="aboutBox">
      <img src={logo} alt="Cat Splat Logo" className="aboutBoxLogo" />
      <h3 className="aboutHead">OUR TEAM</h3>
      <p className="aboutPara"></p>
      <div className="roster">
        <Card title="Hisham Ata" subtitle="Founder - Technical Director">
          <p>
            Hisham founded Cat Splat Studios in 2015. His background is in
            programming, IT and project management. In his free time, he loves
            playing fighting games, being a competitor and a commentator for the
            Canadian fighting game community.
          </p>
        </Card>
        <Card title="Kyle Skidmore" subtitle="Project Manager - Game Designer">
          <p>
            Kyle is a designer and art director who also takes the project
            management role at Cat Splat. He's loved video games since he could
            hold a controller. His passion for games and the systems behind them
            makes him the de facto Dungeon Master of the team, as well.
          </p>
        </Card>
        <Card title="Vader" subtitle="Team Mascot">
          <p>
            Vader is an adventurous fluffy cat who continues to motivate us with
            his enthusiasm and attention to detail when reviewing our work. His
            furrvourite games involved the kitty post and laser (pointer) tag!
          </p>
        </Card>
      </div>
      <div className="teamPictures">
        <img src={team} alt="Cat Splat Team" className="team" />
        <img src={vader} alt="vader" className="team" />
      </div>

      <div className="footBox">
        <Footer />
      </div>
    </div>
  );
};

export default About;
