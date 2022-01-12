import React from "react";

import Taskbar from "../components/layout/Taskbar.component.js";
import classes from "./TaskPage.module.scss";
import TaskList from "../components/tasks/TaskList.component";

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
