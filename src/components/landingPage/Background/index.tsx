"use client";
import React, { FC, PropsWithChildren } from "react";
import useStyles from "./useStyles";

type BackgroundType = PropsWithChildren;
const Background: FC<BackgroundType> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.backgoundContainer}>
      <div className={classes.childrenContainer}>{children}</div>
      <div className={classes.blueGradient} />
    </div>
  );
};

export default Background;
