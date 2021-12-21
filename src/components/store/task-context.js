import React, { createContext, useState } from "react";
// import { useLocalStorage } from "../../lpers/localStorage/useLocalStorage.js";
import useLocalStorage from "react-localstorage-hook";

const TaskContext = createContext({
  tasksList: [],
  totalNotStartedTasks: 0,
  totalInProgressTasks: 0,
  totalCompeleteTasks: 0,
  notStartedList: [],
  inProgressList: [],
  compeleteList: [],
});

export function TaskContextProvider(props) {
  const [userTaskInfo, setUserTaskInfo] = useLocalStorage("listArr", []);
  // console.log(userTaskInfo)

  // const taskList = userTaskInfo;
  // console.log(taskList);
  // const saveTaskHandler= (taskInfo) =>  {
  //   setUserTaskInfo(userTaskInfo.concat(taskInfo))

  // }

  // function editTaskHandler(taskId) {
  //   setUserTaskInfo(() => {
  //     return;
  //   });
  // }

  // function deleteTaskHandler(taskId) {
  //   setUserTaskInfo((preTaskInfo) => {
  //     return preTaskInfo.filter((taskList) => taskList.id !== taskId);
  //   });
  // }

  let totalNotStartedTasks = 0;
  let totalInProgressTasks = 0;
  let totalCompeleteTasks = 0;
  let notStartedList = [];
  let inProgressList = [];
  let compeleteList = [];

  function countTaskTypes() {
    userTaskInfo.forEach((element) => {
      if (element.taskType === "Not started") {
        totalNotStartedTasks++;
        notStartedList.push(element);
      } else if (element.taskType === "In progress") {
        totalInProgressTasks++;
        inProgressList.push(element);
      } else {
        totalCompeleteTasks++;
        compeleteList.push(element);
      }
    });
    console.log("ctx", totalNotStartedTasks);
    return totalNotStartedTasks, totalInProgressTasks, totalCompeleteTasks;
  }

  countTaskTypes();
  
  const context = {
    taskList: userTaskInfo,
    totalNotStartedTasks: totalNotStartedTasks,
    totalInProgressTasks: totalInProgressTasks,
    totalCompeleteTasks: totalCompeleteTasks,
    notStartedList: notStartedList,
    inProgressList: inProgressList,
    compeleteList: compeleteList,
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
