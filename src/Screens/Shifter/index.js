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
          <h3 className="shifterSub">The Story So Far</h3>
          <p>
            The Agonians have drained their planet of water and now roam space
            looking for planets rich with it, destroying any intelligent life
            present to use the resources as they see fit.
          </p>
          <p>
            They've set their sights on Earth and pushed the Galactic Alliance
            to the brink of collapse! Combing human technology with reclaimed
            alien parts, the Alliance has created a powerful fight craft
            designated Codename: Shifter.
          </p>
          <p>
            Take control of Shifter and gun down the invaders! The Alliance
            depends on you!!
          </p>
          <br />
          <h3 className="shifterSub">Gameplay</h3>
          <p>
            Codename: Shifter is a top-down arcade shooter that focuses on
            customization and replay value.
          </p>
          <div className="features">
            <Card title="Power In Death" addedClasses={["shifterCard"]}>
              <p>
                Collect resources from fallen enemies to upgrade the ship, even
                after you 'die'. Swap weapons and parts for different
                strategies!
              </p>
            </Card>
            <Card title="Procedural Levels" addedClasses={["shifterCard"]}>
              <p>
                Random generation of levels and enemy encounters mean the game
                is different each time, providing lots of replay opportunity.
              </p>
            </Card>
            <Card title="Wicked Invaders" addedClasses={["shifterCard"]}>
              <p>
                Inspired by the many creatures of the oceans, the enemy comes in
                vast numbers but are backed by ruthless bosses and mini-bosses.
                Learn their patterns and expose their weaknesses for a path to
                victory!
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
