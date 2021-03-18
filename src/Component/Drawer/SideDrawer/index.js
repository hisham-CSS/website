import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Backdrop from "../Backdrop";

import catLogo from "../../../Assets/catsplat/CatSplatLogo_NoText_LIGHT.png";

const SideDrawer = (props) => {
  let attachedClasses = "sideDrawer close";

  if (props.open) {
    attachedClasses = "sideDrawer open";
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses} onClick={props.closed}>
        <img src={catLogo} alt="Cat logo" style={{ width: 50 }} />
        <Link
          to={process.env.PUBLIC_URL + "/shifter"}
          className="headerlinkDrawer"
        >
          <h5>CODENAME: SHIFTER</h5>
        </Link>
        {/* <Link
          to={process.env.PUBLIC_URL + "/rocket"}
          className="headerlinkDrawer"
        >
          <h5>ROCKET RECOVER</h5>
        </Link> */}
        <Link
          to={process.env.PUBLIC_URL + "/about"}
          className="headerlinkDrawer"
        >
          <h5>ABOUT US</h5>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
