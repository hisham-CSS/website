import React from "react";

import "./style.css";

const RocketCard = (props) => {
  let attachedClasses = ["rocketCard"];
  let imageClasses = ["headerImage"];

  if (props.addedClasses)
    attachedClasses = ["rocketCard", ...props.addedClasses];

  if (props.headerClasses)
    imageClasses = ["headerImage", ...props.headerClasses];

  return (
    <div className={attachedClasses.join(" ")}>
      <img
        src={props.header}
        alt="featureImage"
        className={imageClasses.join(" ")}
      />
      <div className="rocketDescription">{props.children}</div>
    </div>
  );
};

export default RocketCard;
