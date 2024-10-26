"use client";
import React from "react";
import useStyles from "./useStyles";

type ButtonProps = {
  label: string;
  className?: string;
};

const RoundedButton: React.FC<ButtonProps> = ({ label, className }) => {
  const { classes } = useStyles();
  return (
    <div className={`${classes.buttonDesign} ${className || ""}`}>{label}</div>
  );
};

export default RoundedButton;
