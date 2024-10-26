"use client";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing, breakpoints }) => ({
  buttonDesign: {
    color: "white",
    width: "fit-content",
    padding: spacing(0.5),
    cursor: "pointer",
    [breakpoints.down("md")]: {
      fontSize: 12,
      padding: spacing(0.2),
    },
  },
}));

export default useStyles;
