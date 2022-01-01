import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../store/task-context";

import classes from "./Taskbar.module.scss";

function Taskbar() {
  const taskCtx = useContext(TaskContext);

  // const [timeFilter, setTimeFilter] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [rrrr, setRrrr] = useState([]);
  const [ttt, setTtt] = useState([]);


  const filterTime = (e) => {
    // setTimeFilter(e.target.value);
    const currentData = new Date();
    console.log("currentData", currentData);

    let todayTaskList = [];
    // let thisWeekTaskList = [];
    let thisMonthTaskList = [];
    let thisYearTaskList = [];

    let taskCheckTimeList = [];

    taskCtx.taskList.forEach((arrayItem) => {
      let taskDate = arrayItem.taskDeadline;
      let taskTime = arrayItem.taskReminder;
      let taskId = arrayItem.id;

      let taskDeadlineItems = taskDate.concat(" ", taskTime);
      let taskDeadlineItemsCal = new Date(taskDeadlineItems);

      console.log("taskDeadlineItemsCal", taskDeadlineItemsCal);
      let DeadlineListItems = { taskDeadlineItemsCal, taskId };
      taskCheckTimeList.push(DeadlineListItems);
    });

    if (e.target.value === "Today") {
      console.log("today");
      const idTimeList = taskCheckTimeList.filter((arrayItem) => {
        if (
          currentData.getDate() === arrayItem.taskDeadlineItemsCal.getDate()
        ) {
          todayTaskList.push(arrayItem.taskId);
        }
      });
      const filtered = taskCtx.taskList.filter((item) =>
        todayTaskList.includes(item.id)
      );
      // setTimeFilter(e.target.value);
      setTaskList(filtered)
      console.log("today", taskList);
      taskCtx.listingTaskTypes(taskList);


    } else if (e.target.value === "This Month") {
      console.log("This Month");
      const idTimeList = taskCheckTimeList.filter((arrayItem) => {
        if (
          currentData.getMonth() + 1 ===
          arrayItem.taskDeadlineItemsCal.getMonth() + 1
        ) {
          thisMonthTaskList.push(arrayItem.taskId);
        }
      });
      console.log("Month", thisMonthTaskList);
      const filtered = taskCtx.taskList.filter((item) =>
        thisMonthTaskList.includes(item.id)
      );
      // setTimeFilter(e.target.value);
      
      setRrrr(filtered);
      console.log("This Month", rrrr);
      taskCtx.listingTaskTypes(rrrr);

    } else if (e.target.value === "This Year") {
      console.log("This Year");
      const idTimeList = taskCheckTimeList.filter((arrayItem) => {
        if (
          currentData.getFullYear() ===
          arrayItem.taskDeadlineItemsCal.getFullYear()
        ) {
          thisYearTaskList.push(arrayItem.taskId);
        }
      });
      const filtered = taskCtx.taskList.filter((item) =>
        thisYearTaskList.includes(item.id)
      );
      // setTimeFilter(e.target.value);
      // taskCtx.listingTaskTypes(filtered);
      setTtt(filtered)
      console.log("Year", ttt);
      taskCtx.listingTaskTypes(ttt);


    }
  };

  useEffect(() => {
    setTaskList(taskCtx.taskList);
  }, taskList);

  return (
    <div className={classes["main-header"]}>
      <h1>Tasks</h1>
      <select className={classes["select-calender"]} onChange={filterTime}>
        <option value="Today">Today</option>
        {/* <option value="This Week" selected>
          This Week
        </option> */}
        <option value="This Month">This Month</option>
        <option value="This Year">This Year</option>
      </select>
    </div>
  );
}

export default Taskbar;
