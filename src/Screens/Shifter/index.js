import React from "react";

import "./style.css";

import Footer from "../../Component/Footer";
import Card from "../../Component/Card";

import Layer1 from "../../Assets/shifter/Shifter.png";
import laserShip from "../../Assets/shifter/Layer1.png";
import Layer2 from "../../Assets/shifter/SpaceStation.png";
import Layer3 from "../../Assets/shifter/Planet.png";
import Layer4 from "../../Assets/shifter/Layer4.png";
import Logo from "../../Assets/shifter/SHIFTER_title.png";

const Shifter = () => {
  return (
    <div className="shiftBox">
      <div className="Game">
        <img src={Layer3} alt="Planet Earth" className="earth" />
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Layer4} alt="Background" className="background" />
        <img src={Layer1} alt="Player Ship" className="plane" />
        <img src={Layer2} alt="Space Station" className="spaceShip" />
      </div>
      <div className="aboutGame">
        <div className="centerGameContaint">
          <h2>About CODENAME: SHIFTER</h2>
          <hr className="titleLine" />
          <p>
            In the year 21XX our galaxy is invaded by a powerful species, the
            Agonians. Having drained their own world of the most valuable
            resource, water, they now seek out planets rich with it, and destroy
            all intelligent life in the process.
          </p>
          <p>
            The Galactic Alliance has been pushed to the brink. The last hope
            lies with a secret project that has combined all the Alliance
            ingenuity and technology with a power source from one of the
            defeated alien spacecraft. They’ve designated this project the
            Codename: Shifter.
          </p>
          <p>
            Codename: Shifter is a Top-Down Arcade Shooter which blends various
            gameplay themes together to create an enjoyable and replayable
            experience. Players will have the opportunity to experience the game
            in various way, adapting to the gameplay and choosing their path to
            victory!
          </p>
          <div className="features">
            <Card title="Rougelike Death System" addedClasses={["shifterCard"]}>
              <p>
                Collect data caches to keep after death to permantly upgrade
                your ship on your next run.
              </p>
            </Card>
            <Card title="Procedural Encounters" addedClasses={["shifterCard"]}>
              <p>
                Every encounter in each level will be generated for a different
                combat experience.
              </p>
            </Card>
            <Card
              title="Player Ship Customization"
              addedClasses={["shifterCard"]}
            >
              <p>
                Choose from various weapons, upgrades, and parts to personalize
                your ship in battle.
              </p>
            </Card>
          </div>
          <img
            src={laserShip}
            width={200}
            style={{ marginBottom: "20px", marginTop: "20px" }}
            alt="Player Ship"
          />
          <h3 className="endAction">CURRENTLY IN DEVELOPMENT</h3>
          <div
            className="leanLink"
            onClick={() => window.open("https://discord.gg/bzxuqjQ", "_blank")}
          >
            <h3>FIND OUT MORE!</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shifter;
