"use client";
import React from "react";
import useStyles from "./useStyle";

type ButtonProps = {
  label: string;
};

const BorderlessButton: React.FC<ButtonProps> = ({ label }) => {
  const { classes } = useStyles();
  return <div className={classes.buttonDesign}>{label}</div>;
};

export default BorderlessButton;
