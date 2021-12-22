import React, { createContext, useState, useEffect } from "react";
// import { useLocalStorage } from "../../lpers/localStorage/useLocalStorage.js";
import useLocalStorage from "react-localstorage-hook";

const TaskContext = createContext({
  tasksList: [],
  totalNotStartedTasks: 0,
  totalInProgressTasks: 0,
  totalcompleteTasks: 0,
  notStartedList: [],
  inProgressList: [],
  completeList: [],
});

export function TaskContextProvider(props) {
  const [userTaskInfo, setUserTaskInfo] = useLocalStorage("listArr", []);
  const [context, setContext] = useState({
    taskList: userTaskInfo,
    totalNotStartedTasks: 0,
    totalInProgressTasks: 0,
    totalcompleteTasks: 0,
    notStartedList: [],
    inProgressList: [],
    completeList: [],
    countTaskTypes: (e) => countTaskTypes(e),
  });

  useEffect(() => {
    countTaskTypes(context.taskList);
  }, []);
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

  // let List=[{title:"",data:[]},{title:"",data:[]},{title:"",data:[]}]

  function countTaskTypes(arr) {
    let totalNotStartedTasks = 0;
    let totalInProgressTasks = 0;
    let totalcompleteTasks = 0;
    let notStartedList = [];
    let inProgressList = [];
    let completeList = [];
    arr.forEach((element) => {
      if (element.taskType === "Not started") {
        totalNotStartedTasks++;
        notStartedList.push(element);
      } else if (element.taskType === "In progress") {
        totalInProgressTasks++;
        inProgressList.push(element);
      } else {
        totalcompleteTasks++;
        completeList.push(element);
      }

      //  userTaskInfo.forEach((element) => {
      //   if (element.taskType === "Not started") {
      //     totalNotStartedTasks++;
      //     list[0].title="Not started"
      //     list[0].push(element);
      //   } else if (element.taskType === "In progress") {
      //     totalInProgressTasks++;
      //     inProgressList.push(element);
      //   } else {
      //     totalcompleteTasks++;
      //     completeList.push(element);
      //   }
    });

    setContext({
      taskList: arr,
      totalNotStartedTasks,
      totalInProgressTasks,
      totalcompleteTasks,
      notStartedList,
      inProgressList,
      completeList,
      countTaskTypes: (e) => countTaskTypes(e),
    });
  }

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
