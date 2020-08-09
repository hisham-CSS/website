import React from "react";

import "./style.css";

import insta from "../../Assets/social/whiteInsta.png";
import faceb from "../../Assets/social/whiteFb.png";
import twitter from "../../Assets/social/whiteTwitter.png";
import discord from "../../Assets/social/whiteDiscord.png";
import email from "../../Assets/social/Email_White.png";

const Footer = () => {
  return (
    <div className="gameFoot">
      <div className="infoArea">
        <h3 className="footTitle footAbout">Information</h3>
        <p
          className="infoLink"
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1OAXsbEkM9idgKMaEl5uLz13LieiYTW5kWkQaGoDRqe8/edit?usp=sharing",
              "_blank"
            );
          }}
        >
          Privacy Policy
        </p>
        <p
          className="infoLink"
          onClick={() => {
            window.open(
              "https://drive.google.com/drive/folders/1OHfDNc0OVYBOGCAhdl6607Skq8htgnxs?usp=sharing",
              "_blank"
            );
          }}
        >
          Terms and Conditions
        </p>
        <p>&#169; 2014-2020 Cat Splat Studios Inc</p>
      </div>
      <div className="socialArea">
        <h3 className="footTitle footFollow">Find us on</h3>
        <div className="socialSection">
          <img
            className="icon"
            src={faceb}
            alt="Facebook Icon"
            onClick={() =>
              window.open("https://www.facebook.com/catsplatstudios", "_blank")
            }
          />
          <img
            className="icon"
            src={insta}
            alt="Instagram Icon"
            onClick={() =>
              window.open(
                "https://www.instagram.com/catsplatstudios/",
                "_blank"
              )
            }
          />
          <img
            className="icon"
            src={twitter}
            alt="Twitter Icon"
            onClick={() =>
              window.open("https://twitter.com/CatSplatStudios", "_blank")
            }
          />
        </div>
        <div className="socialSection">
          <img
            className="icon"
            src={discord}
            alt="Discord Icon"
            id="discordIcon"
            style={{ marginBottom: "5px" }}
            onClick={() => window.open("https://discord.gg/bzxuqjQ", "_blank")}
          />
          <img
            className="icon"
            src={email}
            alt="email Icon"
            style={{ marginBottom: "5px" }}
            onClick={() =>
              window.open("mailto:info@catsplatstudios.com", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
