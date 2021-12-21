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
  const taskInfo = useContext(TaskContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openTaskHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Card>
        <TaskHeader title="Not started" />
        <PlusIconContainer onOpen={openTaskHandler} />
        <ul className={classes["task-style"]}>
          <TaskItems />
        </ul>
      </Card>
      <Card>
        <TaskHeader title="In progress" />
        <PlusIconContainer onOpen={openTaskHandler} />
        <ul className={classes["task-style"]}>
          <TaskItems />
        </ul>
      </Card>
      <Card>
        <TaskHeader title="Complete" />
        <PlusIconContainer onOpen={openTaskHandler} />
        <ul className={classes["task-style"]}>
          <TaskItems />
        </ul>
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
