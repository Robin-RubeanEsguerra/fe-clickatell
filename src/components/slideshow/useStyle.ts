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
  },
  leftContent: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: spacing(6),
    padding: spacing(5, 0, 5, 0),
  },

  rightContent: {
    width: "40%",
    display: "flex",
    alignItems: "center",
  },
  iconButtonContainer: {
    display: "flex",
    height: "auto",
    gap: spacing(4),
  },
  iconStyle: {
    width: spacing(8),
  },
  phoneStyle: {
    width: spacing(45),
    height: spacing(60),
    backgroundSize: "cover",
  },
  titleStyle: {
    fontSize: spacing(10),
    fontWeight: 600,
    letterSpacing: spacing(0),
    textWrap: "nowrap",
    background: "-webkit-linear-gradient(40deg, #7854fb , #08e7cb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
