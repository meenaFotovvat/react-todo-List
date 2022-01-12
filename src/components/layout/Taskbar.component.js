import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../store/task-context";
import useLocalStorage from "react-localstorage-hook";

import classes from "./Taskbar.module.scss";

function Taskbar() {
  const taskCtx = useContext(TaskContext);
  const localStorageList = useLocalStorage("listArr", []);
  // const [timeFilter, setTimeFilter] = useState("");
  // const [todayTaskList, setTodayTaskList] = useState(taskCtx.taskList);

  // const [monthTaskList, setMonthTaskList] = useState(taskCtx.taskList);
  // const [yearTaskList, setYearTaskList] = useState(taskCtx.taskList);

  const filterTime = (e) => {
    // setTimeFilter(e.target.value);
    const currentData = new Date();
    // console.log("currentData", currentData);

    // let todayTaskList = [];
    // let thisWeekTaskList = [];
    // let thisMonthTaskList = [];
    // let thisYearTaskList = [];

    // let taskCheckTimeList = [];

    // taskCtx.taskList.forEach((arrayItem) => {
    //   let taskDate = arrayItem.taskDeadline;
    //   let taskTime = arrayItem.taskReminder;
    //   let taskId = arrayItem.id;

    //   let taskDeadlineItems = taskDate.concat(" ", taskTime);
    //   let taskDeadlineItemsCal = new Date(taskDeadlineItems);

    //   console.log("taskDeadlineItemsCal", taskDeadlineItemsCal);
    //   let DeadlineListItems = { taskDeadlineItemsCal, taskId };
    //   taskCheckTimeList.push(DeadlineListItems);
    // });

    if (e.target.value === "Today") {
      // console.log("today");
      // const idTimeList = taskCheckTimeList.filter((arrayItem) => {
      //   if (
      //     currentData.getDate() === arrayItem.taskDeadlineItemsCal.getDate()
      //   ) {
      //     todayTaskList.push(arrayItem.taskId);
      //   }
      // });
      // const filtered = taskCtx.taskList.filter((item) =>
      //   todayTaskList.includes(item.id)
      // );
      // // setTimeFilter(e.target.value);
      // setTaskList(filtered);
      // console.log("today", taskList);
      // taskCtx.listingTaskTypes(taskList);

      let thisDayTaskList = [];
      console.log(localStorageList)
      localStorageList[0].forEach((item) => {
        console.log(localStorageList)
        let splitTaskDeadline = item.taskDeadline.split("-");
        let currentDataToString = currentData.toLocaleDateString().split("/");
        if (
          +splitTaskDeadline[0] === +currentDataToString[2] &&
          +splitTaskDeadline[1] === +currentDataToString[0] &&
          +splitTaskDeadline[2] === +currentDataToString[1]
        ) {
          // setTodayTaskList([]);
          thisDayTaskList.push(item);

          console.log("thisDayTaskList", thisDayTaskList);
        }
      });
      // setTodayTaskList((todayTaskList) => {
      //   return thisDayTaskList;
      // });
      // setTodayTaskList(thisDayTaskList)
      taskCtx.listingTaskTypes(thisDayTaskList);
      console.log("todayTaskList", thisDayTaskList);
    } else if (e.target.value === "This Month") {
      // console.log("This Month");
      // const idTimeList = taskCheckTimeList.filter((arrayItem) => {
      //   if (
      //     currentData.getMonth() + 1 ===
      //     arrayItem.taskDeadlineItemsCal.getMonth() + 1
      //   ) {
      //     thisMonthTaskList.push(arrayItem.taskId);
      //   }
      // });
      // console.log("Month", thisMonthTaskList);
      // const filtered = taskCtx.taskList.filter((item) =>
      //   thisMonthTaskList.includes(item.id)
      // );
      // // setTimeFilter(e.target.value);

      // setRrrr(filtered);
      // console.log("This Month", rrrr);
      // taskCtx.listingTaskTypes(rrrr);

      let thisMonthTaskList = [];
      localStorageList[0].forEach((item) => {
        let splitTaskDeadline = item.taskDeadline.split("-");

        let currentDataToString = currentData.toLocaleDateString().split("/");
        if (
          +splitTaskDeadline[0] === +currentDataToString[2] &&
          +splitTaskDeadline[1] === +currentDataToString[0]
        ) {
          // setMonthTaskList([]);
          thisMonthTaskList.push(item);
          console.log("thisMonthTaskList", thisMonthTaskList);
        }
      });
      // setMonthTaskList((monthTaskList) => {
      //   return thisMonthTaskList;
      // });
      taskCtx.listingTaskTypes(thisMonthTaskList);
      console.log("month", thisMonthTaskList);
    } else if (e.target.value === "This Year") {
      // console.log("This Year", taskCheckTimeList);
      // const idTimeList = taskCheckTimeList.filter((arrayItem) => {
      //   if (
      //     currentData.getFullYear() ===
      //     arrayItem.taskDeadlineItemsCal.getFullYear()
      //   ) {
      //     thisYearTaskList.push(arrayItem.taskId);
      //   }
      // });
      // const filtered = taskCtx.taskList.filter((item) =>
      //   thisYearTaskList.includes(item.id)
      // );
      // // setTimeFilter(e.target.value);
      // // taskCtx.listingTaskTypes(filtered);
      // setTtt(filtered);
      // console.log("Year", ttt);    let res = [];
      // taskCtx.listingTaskTypes(ttt);
      let thisYearTaskList = [];
      localStorageList[0].forEach((item) => {
        let splitTaskDeadline = item.taskDeadline.split("-");
        let currentDataToString = currentData.toLocaleDateString().split("/");

        if (+splitTaskDeadline[0] === +currentDataToString[2]) {
          // setYearTaskList([]);
          thisYearTaskList.push(item);
        }
        console.log("ifyear", thisYearTaskList);
      });
      // setYearTaskList((yearTaskList) => {
      //   return thisYearTaskList;
      // });
      taskCtx.listingTaskTypes(thisYearTaskList);
      console.log("year", thisYearTaskList);
    }
  };

  // useEffect(() => {
  //   setTodayTaskList(taskCtx.taskList);
  // }, []);

  // useEffect(() => {
  //   setMonthTaskList(taskCtx.taskList);
  // }, []);

  // useEffect(() => {
  //   setYearTaskList(taskCtx.taskList);
  // }, []);

  return (
    <div className={classes["main-header"]}>
      <h1>Tasks</h1>
      <select className={classes["select-calender"]} onChange={filterTime}>
        <option selected disabled>
          select date
        </option>
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
