import theme from "@/themes/theme";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing, breakpoints }) => ({
  backgoundHead: {
    backgroundColor: theme.palette.customBackground.header,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
    maxWidth: breakpoints.values.lg,
    [breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  headItems: {
    alignSelf: "center",
    display: "flex",
    gap: spacing(3),
    padding: spacing(1),
    color: "white",
    maxWidth: breakpoints.values.sm, // Set maxWidth for smaller screens
  },
  separator: {
    borderRight: "solid 2px white",
  },
}));

export default useStyles;
