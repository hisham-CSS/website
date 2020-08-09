import React from "react";

import "./style.css";

const TeamCard = (props) => {
  let attachedClasses = ["card"];

  if (props.addedClasses) attachedClasses = ["card", ...props.addedClasses];

  return (
    <div className={attachedClasses.join(" ")}>
      <div className="description">
        <h3>{props.title}</h3>
        <hr className="line" />
        <h5>{props.subtitle}</h5>
        <div className={props.descriptionClass}>{props.children}</div>
      </div>
    </div>
  );
};

export default TeamCard;
