import React from "react";
import classes from "./emptyPage.module.scss";
import { ReactComponent as SvgIcon } from "../../assets/imgs/emptyPageImg.svg";

function EmptyPage() {
  return (
    <div className={classes.empty}>
      <SvgIcon width='400px'/>
      <p>There is no task to do</p>
    </div>
  );
}

export default EmptyPage;
