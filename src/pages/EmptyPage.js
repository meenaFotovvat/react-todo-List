import React from "react";
import classes from "./emptyPage.module.scss";
import { ReactComponent as SvgIcon } from "../assets/imgs/emptyPageImg.svg";
import Layout from "../components/layout/Layout.component";

function EmptyPage() {
  return (
    <Layout>
      <div className={classes.empty}>
        <SvgIcon width="400px" />
        <p>There is no task to do</p>
      </div>
    </Layout>
  );
}

export default EmptyPage;
