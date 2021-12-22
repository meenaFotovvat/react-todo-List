import React, { useContext, useState } from "react";
import TaskContext from "../store/task-context";

import classes from "./TaskList.module.scss";
import TaskHeader from "../content/TaskHeader.js";
import TaskItems from "./TaskItems";
import Card from "../../components/ui/Card.js";
import PlusIconContainer from "../content/PlusIconContainer.js";
import Backdrop from "../modal/Backdrop.js";
import Modal from "../modal/Modal.js";

function TaskList() {
  const taskCtx = useContext(TaskContext);
  const notStartedList = taskCtx.notStartedList;
  const inProgressList = taskCtx.inProgressList;
  const completeList = taskCtx.completeList;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openTaskHandler() {
    setModalIsOpen(true);
    
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const [value, setValue] = useState();
  return (
    <>
      <Card>
        <TaskHeader title="To Do" count={taskCtx.totalNotStartedTasks} />
        <PlusIconContainer onOpen={openTaskHandler} />
        {notStartedList && notStartedList.length > 0 && (
          <ul className={classes["task-style"]}>
            {notStartedList.map((item) => {
              return (
                <TaskItems
                  key={item.id}
                  id={item.id}
                  taskTitle={item.taskTitle}
                  taskType={item.taskType}
                  taskDeadline={item.taskDeadline}
                  taskDescription={item.taskDescription}
                  taskReminder={item.taskReminder}
                  onOpen={openTaskHandler}
                />
              );
            })}
          </ul>
        )}
      </Card>

      <Card>
        <TaskHeader title="In Progress" count={taskCtx.totalInProgressTasks} />
        <PlusIconContainer onOpen={openTaskHandler} />
        {inProgressList && inProgressList.length > 0 && (
          <ul className={classes["task-style"]}>
            {inProgressList.map((item) => {
              return (
                <TaskItems
                  key={item.id}
                  id={item.id}
                  taskTitle={item.taskTitle}
                  taskType={item.taskType}
                  taskDeadline={item.taskDeadline}
                  taskDescription={item.taskDescription}
                  taskReminder={item.taskReminder}
                />
              );
            })}
          </ul>
        )}
      </Card>
      <Card>
        <TaskHeader title="Complete" count={taskCtx.totalcompleteTasks} />
        <PlusIconContainer onOpen={openTaskHandler} />
        {completeList && completeList.length > 0 && (
          <ul className={classes["task-style"]}>
            {completeList.map((item) => {
              return (
                <TaskItems
                  key={item.id}
                  id={item.id}
                  taskTitle={item.taskTitle}
                  taskType={item.taskType}
                  taskDeadline={item.taskDeadline}
                  taskDescription={item.taskDescription}
                  taskReminder={item.taskReminder}
                />
              );
            })}
          </ul>
        )}
      </Card>
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          onSave={closeModalHandler}
          onDelete={closeModalHandler}
          onEdit={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </>
  );
}

export default TaskList;
