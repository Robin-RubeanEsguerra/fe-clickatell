"use client";
import { StaticImageData } from "next/image";
import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import useStyles from "./useStyle";
import RoundedButton from "../buttons/RoundedButton";
import {
  fadeVariants,
  slideVariants,
  slideVariantsMoblile,
} from "./animations";

type SlideshowProps = {
  image: StaticImageData[];
  icon: string[];
  title: string[];
  duration?: number;
};
const LandingSlideShow: FC<SlideshowProps> = ({
  icon,
  image,
  title,
  duration = 2000,
}) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, duration);

    return () => clearInterval(interval);
  }, [image.length, duration]);

  const { classes } = useStyles();

  return (
    <motion.div className={classes.slideshowContainer}>
      <motion.div className={classes.slideshowBox}>
        <motion.div className={classes.leftContent}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className={classes.titleStyle}
              key={`title-${index}`}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {title[index]}
            </motion.div>
          </AnimatePresence>
          <div className={classes.taglineStyle}>
            CHAT-POWERED CUSTOMER CONNECTIONS
          </div>
          <motion.div className={classes.iconButtonContainerSmaller}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`icon-${index}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={icon[index]}
                  alt={`Slide ${index}`}
                  className={classes.iconStyle}
                />
              </motion.div>
            </AnimatePresence>
            <RoundedButton
              className={classes.buttonDesign}
              label="Let's Chat"
            />
          </motion.div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`image-${index}`}
              variants={slideVariantsMoblile}
              initial="initial"
              animate="animate"
              exit="exit"
              className={classes.phoneSmaller}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image[index]}
                alt={`Slide ${index}`}
                className={classes.phoneStyle}
              />
            </motion.div>
          </AnimatePresence>
          <motion.div className={classes.iconButtonContainerDesktop}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`icon-${index}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={icon[index]}
                  alt={`Slide ${index}`}
                  className={classes.iconStyle}
                />
              </motion.div>
            </AnimatePresence>
            <RoundedButton
              className={classes.buttonDesign}
              label="Let's Chat"
            />
          </motion.div>
        </motion.div>
        <motion.div className={classes.rightContent}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`image-${index}`}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={classes.phoneDesktop}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image[index]}
                alt={`Slide ${index}`}
                className={classes.phoneStyle}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingSlideShow;
