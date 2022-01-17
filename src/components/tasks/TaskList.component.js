import React, { useContext, useState } from "react";
import TaskContext from "../store/task-context";

import classes from "./TaskList.module.scss";
import TaskHeader from "../content/TaskHeader.component.js";
import TaskItems from "./TaskItems.component";
import Card from "../ui/Card.component.js";
import PlusIconContainer from "../content/PlusIconContainer.component.js";
import Backdrop from "../modal/Backdrop.component.js";
import Modal from "../modal/Modal.component.js";

function TaskList() {
  const taskCtx = useContext(TaskContext);
  const notStartedList = taskCtx.notStartedList;
  const inProgressList = taskCtx.inProgressList;
  const completeList = taskCtx.completeList;
  let selectedTaskId;

  const currentData = new Date();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemModal, setModal] = useState();

  function openTaskHandler(e) {
    setModalIsOpen(true);
    selectedTaskId = e.target.id;
    const selectedTask = taskCtx.taskList.filter(element =>
      (element.id === selectedTaskId)
    );
    if (selectedTask) {
      setModal(selectedTask);
    } else {
      setModal();
    }
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Card>
        <TaskHeader title="To Do" count={taskCtx.totalNotStartedTasks} />
        <PlusIconContainer onOpen={openTaskHandler} />
        {notStartedList && notStartedList.length > 0 && (
          <ul className={classes["task-style"]}>
            {notStartedList.map((item) => {
              let taskDate = item.taskDeadline;
              let taskTime = item.taskReminder;

              let taskDeadlineItems = taskDate.concat(' ', taskTime);
              let taskDeadlineItemsMili = new Date(taskDeadlineItems).getTime();

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
                  classOfLi={taskDeadlineItemsMili - currentData < 10800000 ? 'deadline-style' : 'task-list-items'}
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
              let taskDate = item.taskDeadline;
              let taskTime = item.taskReminder;

              let taskDeadlineItems = taskDate.concat(' ', taskTime);
              let taskDeadlineItemsMili = new Date(taskDeadlineItems).getTime();

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
                  classOfLi={taskDeadlineItemsMili - currentData < 10800000 ? 'deadline-style' : 'task-list-items'}
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
                  onOpen={openTaskHandler}
                  classOfLi= {'task-list-items'}
                />
              );
            })}
          </ul>
        )}
      </Card>
      {modalIsOpen && (
        <Modal
          selectedTask={itemModal}
          setModalIsOpen={setModalIsOpen}
          onCancel={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </>
  );
}

export default TaskList;
