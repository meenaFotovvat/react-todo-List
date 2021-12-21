import React from "react";

import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <section className={classes.sidebar}>
      <img src="./imgs/Fanap-Soft-Logo.png" width="100px" height="100px" />
      <span className={classes['span-style']} data-id="Overview">
        <span className={["icon-home-outline sidebar-icons"]}></span>
        <p>Overview</p>
      </span>
      <span className={classes['span-style']} data-id="Stats">
        <span className="icon-stats"></span>
        <p>Stats</p>
      </span>
      <span className={classes['span-style']} data-id="Tasks">
        <span className="icon-folder-open-o"></span>
        <p>Tasks</p>
      </span>
      <span className={classes['span-style']} data-id="Chat">
        <span className="icon-chat"></span>
        <p>Chat</p>
      </span>
      <span className={classes['span-style']} data-id="Calendar">
        <span className="icon-calendar"></span>
        <p>Calendar</p>
      </span>
      <span className={classes['span-style']} data-id="Setting">
        <span className="icon-settings"></span>
        <p>Setting</p>
      </span>
      <span className={classes['span-style']} data-id="Logout">
        <span className="icon-log-out"></span>
        <p>Log out</p>
      </span>
    </section>
  );
}

export default Sidebar;
