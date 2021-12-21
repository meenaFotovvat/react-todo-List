import React from "react";

import classes from "./TaskItems.module.scss";
import TaskList from "./TaskList";

const DUMMY_DATA = [
  {
    id: "1638097613963",
    taskType: "In progress",
    taskDeadline: "2021-11-29",
    taskDescription:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
    taskReminder: "12:08",
    taskTitle: "js",
  },
  {
    id: "1638163175362",
    taskType: "Not started",
    taskDeadline: "2021-12-04",
    taskDescription:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    taskReminder: "08:50",
    taskTitle: "css",
  },
  {
    id: "1638170881744",
    taskType: "Not started",
    taskDeadline: "2021-12-10",
    taskDescription:
      "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    taskReminder: "10:59",
    taskTitle: "icon-attach_file",
  },
  {
    id: "1638189160060",
    taskType: "Not started",
    taskDeadline: "2021-11-05",
    taskDescription: "efewf we4fwef",
    taskReminder: "",
    taskTitle: "test1",
  },
  {
    id: "1638195159604",
    taskType: "Not started",
    taskDeadline: "2022-01-29",
    taskDescription: "",
    taskReminder: "17:43",
    taskTitle: "next year",
  },
  {
    id: "1638253465301",
    taskType: "In progress",
    taskDeadline: "2021-12-04",
    taskDescription: "lorem",
    taskReminder: "09:57",
    taskTitle: "inprogress2",
  },
  {
    id: "1638345536862",
    taskType: "In progress",
    taskDeadline: "2021-12-30",
    taskDescription: "dfvgerdfgr",
    taskReminder: "11:29",
    taskTitle: "tests",
  },
  {
    id: "1638345551126",
    taskType: "Complete",
    taskDeadline: "2021-12-22",
    taskDescription: "dfgvergrg",
    taskReminder: "11:30",
    taskTitle: "task1",
  },
  {
    id: "1638348024962",
    taskType: "Complete",
    taskDeadline: "2021-12-01",
    taskDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus id massa sed faucibus. Aenean iaculis et lorem sit amet laoreet. Mauris ligula ex, aliquam vel nibh ut, luctus eleifend eros. Phasellus eget convallis mauris. Pellentesque nulla augue, euismod et tristique nec, tincidunt sed arcu. Duis fermentum purus ac justo elementum venenatis. Vivamus posuere mauris velit, at luctus arcu elementum eu.",
    taskReminder: "13:12",
    taskTitle: "js",
  },
  {
    id: "1638803856664",
    taskType: "Not started",
    taskDeadline: "2021-12-10",
    taskDescription: "jfjkhdufhy",
    taskReminder: "18:48",
    taskTitle: "tests",
  },
];

function TaskItems(props) {
  return (
    <>
      {DUMMY_DATA.map((tasks) => {
        return (
          <li className={classes["task-list-items"]}>
            <div className={classes["task-item-title"]}>
              • {tasks.taskTitle}
              <span className="icon-attach_file"></span>
            </div>
            <p>{tasks.taskDescription}</p>
          </li>
        );
      })}
    </>
  );
}

export default TaskItems;
