import React from "react";

import classes from "./TaskHeader.module.scss";

function TaskHeader(props) {
  return (
    <div className={classes["header-tasks"]}>
      <h2 className={classes["h2-style"]}>{props.title}</h2>
      <span className={classes["task-counter"]}>{props.count}</span>
    </div>
  );
}

export default TaskHeader;