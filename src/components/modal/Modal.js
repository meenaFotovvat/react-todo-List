import React, { useContext, useRef } from "react";
// import TaskContext from "../store/task-context";
// import useLocalStorage from 'react-localstorage-hook';
import { useLocalStorage } from "../../lpers/localStorage/useLocalStorage.js";

import classes from "./Modal.module.scss";
import { mergeClasses } from "../../utils";
import { useState } from "react/cjs/react.development";

function Modal(props) {
  const [userTaskInfo, setUserTaskInfo] = useLocalStorage('listArr', []);
  // const taskCtx = useContext(TaskContext);
  const [form, setForm] = useState({})
  const handleChange = (ev) => {
    ev.persist()
    setForm(pre => ({...pre, [ev.target.name]: ev.target.value}))
  }
  const taskTitleRef = useRef();
  const taskDeadlineRef = useRef();
  const taskDescriptionRef = useRef();
  const taskReminderRef = useRef();
  const TaskTypeRef = useRef();


  function cancelHandler() {
    props.onCancel();
  }

  function saveHandler() {
    props.onSave();
  }

  function deleteHandler() {

    props.onDelete();
    // setUserTaskInfo((preTaskInfo) => {
    //   return preTaskInfo.filter((taskList) => taskList.id !== taskId);
    // });
  }

  function editHandler() {
    props.onEdit();
  }

  function submitHandler(event) {
    // props.onSave();
    event.preventDefault();

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
    }
    setUserTaskInfo((preTaskInfo) => {
      return preTaskInfo.concat(taskInfo);
    });
    // taskCtx.saveTaskHandler(taskInfo);
    setTimeout(props.onSave)
  }

  return (
    <form className={classes["task-page"]} onSubmit={submitHandler}>
      <select name="select" className={classes["select-task"]} ref={TaskTypeRef} >
        <option value="Not started">
          Not started
        </option>
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
        />
      </label>
      <br />
      <div className={classes["btn-container"]}>
        <button
          id="saveButton"
          className={classes["button-submit-style"]}
        >
          Save
        </button>
        <button
          id="editButton"
          className={classes["button-submit-style"]}
          type="button"
          onClick={editHandler}
        >
          Edit
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
