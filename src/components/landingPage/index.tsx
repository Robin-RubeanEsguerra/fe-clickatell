import React from "react";
import Background from "./Background";
import useStyles from "./useStyles";
import { Typography } from "@mui/material";
import { isAvail } from "@/constants/landing-page-const";

function LandingPage() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Background>
        <div className={classes.boxContainer}>
          <div className={classes.box}>BOX</div>
        </div>
      </Background>
      <div className={classes.textContainer}>
        <div className={classes.textBox}>
          <Typography variant="h4" className={classes.textHead}>
            {isAvail.head}
          </Typography>
          <Typography variant="h5" className={classes.textBody}>
            {isAvail.paragraph}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
