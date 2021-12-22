import React from "react";

import classes from "./TaskItems.module.scss";

function TaskItems(props) {
  return (
    <li className={classes["task-list-items"]}>
      <div className={classes["task-item-title"]}>
        • {props.taskTitle}
        <span className="icon-attach_file"></span>
      </div>
      <p>{props.taskDescription}</p>
    </li>
  );
}

export default TaskItems;
