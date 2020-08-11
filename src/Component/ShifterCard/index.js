import React from "react";

import "./style.css";

const ShifterCard = (props) => {
  let attachedClasses = ["shifterCard"];
  let imageClasses = ["shiftTitleImage"];

  if (props.addedClasses)
    attachedClasses = ["shifterCard", ...props.addedClasses];

  if (props.headerClasses)
    imageClasses = ["shiftTitleImage", ...props.headerClasses];

  return (
    <div className={attachedClasses.join(" ")}>
      <img
        src={props.header}
        alt="feature header"
        className={imageClasses.join(" ")}
      />
      <hr className="titleLine" />
      <div className="shifterDescription">{props.children}</div>
    </div>
  );
};

export default ShifterCard;
