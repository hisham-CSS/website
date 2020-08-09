import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import DrawerToggle from "../Drawer/DrawerToggle";
import SideDrawer from "../Drawer/SideDrawer";

import catLogo from "../../Assets/catsplat/CatSplatLogo_NoText_LIGHT.png";
import logo from "../../Assets/catsplat/CatSplatText_LIGHT.png";

const Header = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const openSideDrawer = () => {
    console.log("clicked");
    setSideDrawer(true);
  };

  const closeSideDrawer = () => {
    setSideDrawer(false);
  };

  return (
    <div className="headerBox">
      <DrawerToggle clicked={openSideDrawer} />
      <SideDrawer open={sideDrawer} closed={closeSideDrawer} />
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img
          src={catLogo}
          className="catLogo"
          alt="Cat logo"
          style={{ width: 50 }}
        />
        <img src={logo} alt="Cat Splat Studios Text Logo" />
      </Link>
      <div className="navLinks">
        <Link to={process.env.PUBLIC_URL + "/shifter"} className="Headerlink">
          <h5>CODENAME: SHIFTER</h5>
        </Link>
        <Link to={process.env.PUBLIC_URL + "/rocket"} className="Headerlink">
          <h5>ROCKET RECOVER</h5>
        </Link>
        <Link to={process.env.PUBLIC_URL + "/about"} className="Headerlink">
          <h5>ABOUT US</h5>
        </Link>
      </div>
    </div>
  );
};

export default Header;
