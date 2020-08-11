import React from "react";

import "./style.css";

import Footer from "../../Component/Footer";
import RocketCard from "../../Component/RocketCard";

import Banner from "../../Assets/rocket/RR_title.png";
import Asteroid from "../../Assets/rocket/Asteroid.png";
import Main_Ship from "../../Assets/rocket/Main_Ship.png";
import Rocket_Valor from "../../Assets/rocket/Rocket_Valor.png";
import Rocket_Dagger from "../../Assets/rocket/Rocket_Dagger.png";
import Background from "../../Assets/rocket/Space Background.png";
import Rocket_Buzzer from "../../Assets/rocket/Rocket_Buzzer.png";
import Rocket_Cruiser from "../../Assets/rocket/Rocket_Cruiser.png";
import Apple from "../../Assets/AppleLogo.png";
import Google from "../../Assets/GoogleLogo.png";

import RocketScreen1 from "../../Assets/rocket/RR_SpaceFun.png";
import RocketScreen2 from "../../Assets/rocket/RR_Customize.png";

import Header1 from "../../Assets/rocket/Header1.png";
import Header2 from "../../Assets/rocket/Header2.png";
import Header3 from "../../Assets/rocket/Header3.png";

import logo from "../../Assets/catsplat/CatSplatLogo_DARK.png";
const Rocket = () => {
  return (
    <div className="rocketBox">
      <div className="RocketGame">
        <img src={Banner} alt="Banner" className="Banner" />
        <img src={Main_Ship} alt="asteroid" className="MainShip" />
        <img src={Asteroid} alt="asteroid" className="Asteroid3" />
        <img src={Background} alt="background" className="rocketBackground" />
        <img src={Asteroid} alt="asteroid" className="Asteroid2" />
        <img
          src={Rocket_Valor}
          alt="rocket"
          className="Rocket_Valor Rocket_Valor-1"
        />
        <img
          src={Rocket_Buzzer}
          alt="rocket"
          className="Rocket_Buzzer Rocket_Dagger-1"
        />
        <img
          src={Rocket_Dagger}
          alt="rocket"
          className="Rocket_Dagger Rocket_Dagger-1"
        />
        <img
          src={Rocket_Cruiser}
          alt="rocket"
          className="Rocket_Cruiser Rocket_Cruiser-1"
        />
        <img
          src={Apple}
          width={200}
          alt="App Store"
          className="mobileLogo bannerMobileApple"
          onClick={() =>
            window.open(
              "https://apps.apple.com/us/app/id1505431817?fbclid=IwAR0yIj3GFEXY21mdDZpyXGlht31H1ElMAkJU7HYnyJDoNiMBeXsdL1wnPOM",
              "_blank"
            )
          }
        />
        <img
          src={Google}
          width={200}
          alt="Google Play Store"
          className="mobileLogo bannerMobileGoogle"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.CatSplatStudios.RocketRecover",
              "_blank"
            )
          }
        />
      </div>
      <div className="aboutRocketGame">
        <div className="centerRocketGameContaint">
          <div className="mobileDownloadArea">
            <img
              src={Apple}
              width={200}
              alt="App Store"
              className="mobileLogo"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/id1505431817?fbclid=IwAR0yIj3GFEXY21mdDZpyXGlht31H1ElMAkJU7HYnyJDoNiMBeXsdL1wnPOM",
                  "_blank"
                )
              }
            />
            <img
              src={Google}
              width={200}
              alt="Google Play Store"
              className="mobileLogo"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.CatSplatStudios.RocketRecover",
                  "_blank"
                )
              }
            />
          </div>
          <div className="section">
            <RocketCard header={Header1} headerClasses={["header1"]}>
              <p>
                Avoid obstacles while collecting fuel and power ups to launch
                your Rocket the farthest and top the Leaderboards! Don't panic
                if you run out of Fuel and you'll get a chance to recover!
              </p>
              <div>
                <img
                  src={RocketScreen1}
                  width={250}
                  alt="rocket"
                  className="featureImage1"
                />
              </div>
            </RocketCard>
          </div>
          <div className="section">
            <RocketCard header={Header2} headerClasses={["header2"]}>
              <div>
                <img
                  src={RocketScreen2}
                  width={250}
                  alt="rocket"
                  className="featureImage2"
                />
              </div>
              <p>
                Collect gears and unlock new Rockets, music tracks, backgrounds,
                or obstacles! Totally change your game experience to fit your
                mood.
              </p>
            </RocketCard>
          </div>
          <div className="section">
            <RocketCard
              header={Header3}
              addedClasses={["rocketCardMobile"]}
              headerClasses={["header3"]}
            >
              <img
                src={Apple}
                width={200}
                alt="App Store"
                className="mobileLogo"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/id1505431817?fbclid=IwAR0yIj3GFEXY21mdDZpyXGlht31H1ElMAkJU7HYnyJDoNiMBeXsdL1wnPOM",
                    "_blank"
                  )
                }
              />
              <img
                src={Google}
                width={200}
                alt="Google Play Store"
                className="mobileLogo"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.CatSplatStudios.RocketRecover",
                    "_blank"
                  )
                }
              />
            </RocketCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rocket;
