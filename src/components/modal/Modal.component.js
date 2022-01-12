import React, { useContext, useRef } from "react";
// import TaskContext from "../store/task-context";
// import useLocalStorage from 'react-localstorage-hook';
import { useLocalStorage } from "../../lpers/localStorage/useLocalStorage.js";

import classes from "./Modal.module.scss";
import { mergeClasses } from "../../utils";
import { useState } from "react/cjs/react.development";
import TaskContext from "../store/task-context.js";

function Modal(props) {
  const [userTaskInfo, setUserTaskInfo] = useLocalStorage("listArr", []);
  const taskCtx = useContext(TaskContext);
  const [form, setForm] = useState({});
  const handleChange = (ev) => {
    ev.persist();
    setForm((pre) => ({ ...pre, [ev.target.name]: ev.target.value }));
  };

  const taskTitleRef = useRef();
  const taskDeadlineRef = useRef();
  const taskDescriptionRef = useRef();
  const taskReminderRef = useRef();
  const TaskTypeRef = useRef();

  function cancelHandler() {
    props.setModalIsOpen(false);
  }

  const selectedTask = props.selectedTask[0];
  function deleteHandler() {
    const newList = taskCtx.taskList.filter((t) => t.id !== selectedTask.id);

    setUserTaskInfo(newList);
    taskCtx.listingTaskTypes(newList);
    setTimeout(props.onCancel);
  }

  function checkHandler(event) {
    event.preventDefault();
    if (selectedTask) {
      selectedTask.taskTitle = taskTitleRef.current.value;
      selectedTask.taskDescription = taskDescriptionRef.current.value;
      selectedTask.taskReminder = taskReminderRef.current.value;
      selectedTask.taskType = TaskTypeRef.current.value;
      selectedTask.taskDeadline = taskDeadlineRef.current.value;

      localStorage.setItem("listArr", JSON.stringify(taskCtx.taskList));
      taskCtx.listingTaskTypes(taskCtx.taskList);
    } else {
      submitHandler();
    }
    props.setModalIsOpen(false);
  }

  function submitHandler() {
    const enteredTitle = taskTitleRef.current.value;
    const enteredDeadline = taskDeadlineRef.current.value;
    const enteredDescription = taskDescriptionRef.current.value;
    const enteredReminder = taskReminderRef.current.value;
    const enteredType = TaskTypeRef.current.value;

    const taskInfo = {
      taskTitle: enteredTitle,
      taskDescription: enteredDescription,
      taskDeadline: enteredDeadline,
      taskReminder: enteredReminder,
      taskType: enteredType,
      id: Date.now().toString(),
    };
    setUserTaskInfo((preTaskInfo) => {
      return preTaskInfo.concat(taskInfo);
    });
    let taskLi = taskCtx.taskList;
    
    taskLi.push(taskInfo);
    localStorage.setItem("listArr", JSON.stringify(taskLi));
    taskCtx.listingTaskTypes(taskLi);
    setTimeout(() => props.setModalIsOpen(false));
  }

  return (
    <form className={classes["task-page"]} onSubmit={checkHandler}>
      <select
        defaultValue={
          props?.selectedTask &&
          props?.selectedTask[0] &&
          props?.selectedTask[0]?.taskType
            ? props.selectedTask[0].taskType
            : null
        }
        name="select"
        className={classes["select-task"]}
        ref={TaskTypeRef}
      >
        <option value="Not started">Not started</option>
        <option value="In progress">In progress</option>
        <option value="Complete">Complete</option>
      </select>
      <div className={classes["close-img"]} onClick={cancelHandler}>
        <span className="icon-clear"></span>
      </div>
      <input
        onChange={handleChange}
        name="titleTask"
        id="titleTask"
        className={mergeClasses(
          classes["input-style"],
          classes["input-title-style"]
        )}
        placeholder="Add title"
        type="text"
        ref={taskTitleRef}
        defaultValue={
          props?.selectedTask &&
          props?.selectedTask[0] &&
          props?.selectedTask[0]?.taskTitle
            ? props.selectedTask[0].taskTitle
            : null
        }
      />
      <br />
      <textarea
        onChange={handleChange}
        placeholder="Add description"
        className={classes["description"]}
        name="description"
        id="description"
        cols="30"
        rows="3"
        ref={taskDescriptionRef}
        defaultValue={
          props?.selectedTask &&
          props?.selectedTask[0] &&
          props?.selectedTask[0]?.taskDescription
            ? props.selectedTask[0].taskDescription
            : null
        }
      ></textarea>
      <br />
      <label>
        Deadline <br />
        <input
          onChange={handleChange}
          name="deadline"
          className={mergeClasses(
            classes["input-style"],
            classes["task-datetime-style"]
          )}
          type="date"
          ref={taskDeadlineRef}
          defaultValue={
            props?.selectedTask &&
            props?.selectedTask[0] &&
            props?.selectedTask[0]?.taskDeadline
              ? props.selectedTask[0].taskDeadline
              : null
          }
        />
      </label>
      <br />
      <label>
        Reminder <br />
        <input
          onChange={handleChange}
          name="reminder"
          className={mergeClasses(
            classes["input-style"],
            classes["task-datetime-style"]
          )}
          type="time"
          ref={taskReminderRef}
          defaultValue={
            props?.selectedTask &&
            props?.selectedTask[0] &&
            props?.selectedTask[0]?.taskReminder
              ? props.selectedTask[0].taskReminder
              : null
          }
        />
      </label>
      <br />
      <div className={classes["btn-container"]}>
        <button id="saveButton" className={classes["button-submit-style"]}>
          {props.selectedTask[0] ? "Edit" : "Save"}
        </button>
        <button
          type="button"
          className={classes["delete-btn"]}
          onClick={deleteHandler}
        >
          <span className="icon-trash-o"></span>
        </button>
      </div>
    </form>
  );
}

export default Modal;
