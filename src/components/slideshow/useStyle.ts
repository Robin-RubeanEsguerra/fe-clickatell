import theme from "@/themes/theme";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing, breakpoints }) => ({
  slideshowContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  slideshowBox: {
    width: "100%",
    maxWidth: breakpoints.values.md,
    padding: spacing(6, 2, 6, 2),
    display: "flex",
    gap: spacing(4),
    justifyContent: "space-between",
    [breakpoints.down("md")]: {
      gap: spacing(2),
      padding: spacing(6, 0, 6, 0),
      flexDirection: "column",
    },
  },
  leftContent: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: spacing(6),
    padding: spacing(5, 0, 5, 0),
    [breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
      textAlign: "center",
      gap: spacing(2),
    },
  },

  rightContent: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    [breakpoints.down("md")]: {
      width: "100%",
    },
  },
  phoneDesktop: {
    [breakpoints.down("md")]: {
      display: "none",
    },
    [breakpoints.up("md")]: {
      display: "flex",
    },
  },
  phoneSmaller: {
    [breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      paddingLeft: spacing(1.2),
      width: "100%",
    },
    [breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconButtonContainerDesktop: {
    display: "none",
    height: "auto",
    gap: spacing(4),
    [breakpoints.up("md")]: {
      display: "flex",
    },
  },
  iconButtonContainerSmaller: {
    display: "none",
    height: "auto",
    gap: spacing(4),
    [breakpoints.down("md")]: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
  },
  iconStyle: {
    width: spacing(8),
  },
  phoneStyle: {
    alignSelf: "center",
    width: spacing(40),
    height: spacing(60),
    backgroundSize: "cover",
  },
  titleStyle: {
    fontSize: spacing(8),
    fontWeight: 600,
    letterSpacing: spacing(0),
    textWrap: "nowrap",
    background: "-webkit-linear-gradient(40deg, #7854fb , #08e7cb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    [breakpoints.down("md")]: {
      fontSize: spacing(6),
    },
  },
  taglineStyle: {
    color: theme.palette.text.secondary,
    letterSpacing: spacing(0.5),
  },
  buttonDesign: {
    border: `${theme.palette.text.secondary} solid 2px`,
    color: theme.palette.text.secondary,
    height: "fit-content",
    fontWeight: 500,
    alignSelf: "center",
    fontSize: spacing(2.5),
    padding: spacing(1, 3, 1, 3),
    textAlign: "center",
  },
}));

export default useStyles;
