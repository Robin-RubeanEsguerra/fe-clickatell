"use client";
import BorderlessButton from "@/components/buttons/BorderlessButton";
import React from "react";
import useStyles from "./useStyles";
function LoginContactHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.backgoundHead}>
      <div className={classes.headContainer}>
        <div className={classes.headItems}>
          <BorderlessButton label="Login" />
          <div className={classes.separator}></div>
          <BorderlessButton label="Contact Support" />
        </div>
      </div>
    </div>
  );
}

export default LoginContactHeader;
