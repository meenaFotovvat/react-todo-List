import React from "react";

import classes from "./Layout.module.scss";
import NavBar from "./NavBar.component.js";
import Sidebar from "./Sidebar.js";

function Layout(props) {
  return (
    <div>
      <main className={classes.container}>
        <NavBar />
        {props.children}
      </main>
      <Sidebar />
    </div>
  );
}

export default Layout;
