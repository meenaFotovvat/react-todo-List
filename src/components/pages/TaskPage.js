import React from "react";

import Taskbar from "../layout/Taskbar.js";
import classes from "./TaskPage.module.scss";
import TaskList from "../tasks/TaskList";

function TaskPage() {
  

  return (
    <div className={classes["container task-container"]}>
      <section className={classes["section--list-of-tasks"]}>
        <div id="to-do-tasks" className={classes["task-lists"]}>
          <Taskbar />
          <div className={classes["task-list-style"]}>
            <TaskList />
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default TaskPage;
