"use client";
import React from "react";
import useStyles from "./useStyles";

type ButtonProps = {
  label: string;
};

const RoundedButton: React.FC<ButtonProps> = ({ label }) => {
  const { classes } = useStyles();
  return <div className={classes.buttonDesign}>{label}</div>;
};

export default RoundedButton;
