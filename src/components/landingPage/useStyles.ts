import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(({ breakpoints, spacing }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "auto",
  },
  box: {
    width: "100%",
    maxWidth: breakpoints.values.lg,
    height: "auto",
    display: "relative",
    padding: spacing(3),
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textBox: {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
  },
  textHead: {
    fontWeight: 600,
    textAlign: "center",
    letterSpacing: 1,
    padding: spacing(1, 0, 1, 0),
  },
  textBody: {
    fontWeight: 300,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 1.5,
    padding: spacing(2, 0, 2, 0),
  },
}));
export default useStyles;
