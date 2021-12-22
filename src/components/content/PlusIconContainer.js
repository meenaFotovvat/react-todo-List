import React from "react";                          

import classes from "./PlusIconContainer.module.scss";

function PlusIconContainer(props) {

  return (
    <div className={classes["icon-plus-style"]}>
      <span className="icon-plus" onClick={props.onOpen}></span>
    </div>
  );
}

export default PlusIconContainer;