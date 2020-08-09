import React from "react";

import "./style.css";

import Footer from "../../Component/Footer";
import Card from "../../Component/Card";

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
import ShopItems from "../../Assets/rocket/shopitems.png";
import RocketScreen from "../../Assets/rocket/rocketScreen.jpg";

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
            <Card
              title="Endless Space Fun!"
              addedClasses={["rocketCard"]}
              descriptionClass="rocketDescription"
            >
              <p>
                Avoid obstacles while collecting fuel and power ups to launch
                your Rocket the farthest and top the Leaderboards! Don't panic
                if you run out of Fuel and you'll get a chance to recover!
              </p>
              <div>
                <img
                  src={RocketScreen}
                  width={300}
                  id="rocketIamge"
                  alt="rocket"
                  className="featureImage"
                />
              </div>
            </Card>
          </div>
          <div className="section">
            <Card
              title="Customize Your Experience"
              addedClasses={["rocketCard"]}
              descriptionClass="rocketDescription"
            >
              <div>
                <img
                  src={logo}
                  width={300}
                  alt="rocket"
                  className="featureImage"
                />
              </div>
              <p>
                Collect gears and unlock new Rockets, music tracks, backgrounds,
                or obstacles! Totally change your game experience to fit your
                mood.
              </p>
            </Card>
          </div>
          <div className="section">
            <Card
              title="DOWNLOAD NOW"
              subtitle="Available on iOS and Google Play"
              addedClasses={["rocketCardMobile"]}
              descriptionClass="rocketDescription"
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
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rocket;
