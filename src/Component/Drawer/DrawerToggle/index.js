import "./style.css";
import React from "react";

const DrawerToggle = (props) => (
  <div className="drawerToggle" onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
