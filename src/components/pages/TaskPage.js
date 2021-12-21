import React, { useState } from "react";

import classes from "./TaskPage.module.scss";

import TaskList from "../tasks/TaskList";

function TaskPage() {
  

  return (
    <div className={classes["container task-container"]}>
      <section className={classes["section--list-of-tasks"]}>
        <div id="to-do-tasks" className={classes["task-lists"]}>
          <div className={classes["main-header"]}>
            <h1>Tasks</h1>
            <select className={classes["select-calender"]}>
              <option value="Today">Today</option>
              <option value="This Week" selected>
                This Week
              </option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>
          </div>
          <div className={classes["task-list-style"]}>
            <TaskList />
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default TaskPage;
