"use client";
import RoundedButton from "@/components/buttons/RoundedButton";
import { navigation } from "@/constants/navigation-linlks";
import React from "react";
import useStyles from "./useStyles";

function Navigation() {
  const { classes } = useStyles();
  return (
    <div className={classes.navigationBox}>
      <div className={classes.boxItems}>
        <div className={classes.logoNavContainer}>
          <div className={classes.clickName}>Clickatell</div>
          <div className={classes.linkContainer}>
            {navigation.map((naviLinks, index) => (
              <div key={index} className={classes.nav}>
                {naviLinks.title}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <RoundedButton label="Contant Sales" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
