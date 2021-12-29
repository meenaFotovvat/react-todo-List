import React, { useContext, useState, useEffect } from "react";

import classes from './Taskbar.module.scss'

function Taskbar() {
  return (
    <div className={classes["main-header"]}>
      <h1>Tasks</h1>
      <select className={classes["select-calender"]}>
        <option value="Today">Today</option>
        <option value="This Week" selected>
          This Week
        </option>
        <option value="This Month">This Month</option>
        <option value="This Year">This Year</option>
      </select>
    </div>
  );
}

export default Taskbar;