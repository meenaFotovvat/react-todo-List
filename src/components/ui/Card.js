import React from "react";

import classes from './Card.module.scss'

function Card(props) {
  return (
    <div className={classes["list-of-tasks"]}>{props.children}</div>
  );
}

export default Card;