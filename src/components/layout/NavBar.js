import React from "react";

import classes from "./NavBar.module.scss";
import NavImg from "../../assets/imgs/profileImg.jpg";

function NavBar() {
  return (
    <div className={classes.nav}>
      <div className={classes["search-container"]}>
        <span className="icon-find_magnifier_magnifying-glass_search_icon"></span>
        <input className={classes['search-box']} type="search" placeholder="Search" />
      </div>
      <div className={classes['icons-container']}>
        <span className="icon-help_outline"></span>
        <span className={['icon-bell']}></span>
        <select className={classes['select-user']}>
          <option value="user1">user1</option>
          <option value="user2" selected>
            user2
          </option>
          <option value="user3">user3</option>
          <option value="user4">user4</option>
        </select>
        <img className={classes['nav-img']} src={NavImg} width="50px" height="50px" />
      </div>
    </div>
  );
}

export default NavBar;
