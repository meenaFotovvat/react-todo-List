import React from "react";

import classes from './Backdrop.module.scss';


function Backdrop(props){
    return(
        <div className={classes["bg-task-page"]}  onClick={props.onCancel} data-display-task />
    )
}

export default Backdrop;