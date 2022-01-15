import React from "react";

import Taskbar from "../components/layout/Taskbar.component.js";
import classes from "./TaskPage.module.scss";
import TaskList from "../components/tasks/TaskList.component";
import Layout from "../components/layout/Layout.component";

function TaskPage() {


  return (
    <Layout>
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
    </Layout>
  );
}

export default TaskPage;
