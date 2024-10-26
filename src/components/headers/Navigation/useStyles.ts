import { makeStyles } from "tss-react/mui";
import theme from "@/themes/theme";
const useStyles = makeStyles()(({ spacing, breakpoints }) => ({
  navigationBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  boxItems: {
    width: "100%",
    maxWidth: breakpoints.values.lg,
    padding: spacing(2),
    display: "flex",
    flexDirection: "row",
    wrap: "nowrap",
    alignItems: "center",
  },
  logoNavContainer: {
    display: "flex",
    justifyContent: "center",
    gap: spacing(5),
  },
  clickName: {
    color: theme.palette.customColor.darkBlue,
    fontSize: 25,
    fontWeight: 300,
  },
  linkContainer: {
    display: "flex",
    gap: spacing(4),
    [breakpoints.down("md")]: {
      display: "none",
    },
  },
  nav: {
    textWrap: "nowrap",
    alignSelf: "center",
    cursor: "pointer",
    fontWeight: 400,
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  },
}));

export default useStyles;
